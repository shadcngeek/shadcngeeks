import JSZip from "jszip";
import { siteUrl } from "./url";

const handleGetFolderName = (path: string) => path.split("/").pop();

const handleCreateFile = (
  decodedContent: string,
  fileName: string,
  folderZip: JSZip
) => {
  const uint8ArrayContent = new Uint8Array(decodedContent.length);
  for (let i = 0; i < decodedContent.length; i++) {
    uint8ArrayContent[i] = decodedContent.charCodeAt(i);
  }

  (folderZip as JSZip).file(fileName, uint8ArrayContent);
};

const handleCreateFilePath = (path: string) => {
  if (path.includes(".")) {
    const folder = path.split("/").slice(1, -1).join("/");
    return folder;
  } else {
    return path;
  }
};

const handleMainDownload = async (path: string) => {
  const result = await fetch(`${siteUrl}/api/download`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ path }),
  });
  console.log(await result.json());
  return await result.json();
};

const handleDownloadZip = async (
  path: string,
  progressCallback: (progress: number) => void
) => {
  let processedCount = 0;
  let totalCount = 0;
  const zip = new JSZip();

  const recurse = async (myPath: string) => {
    const result = await handleMainDownload(myPath);

    const fileContent: any = (result as any).data;
    if (Array.isArray(fileContent)) {
      totalCount += fileContent.length;
      await Promise.all(
        fileContent.map(async (data: any) => {
          if (data.type === "dir") {
            await recurse(data.path);
          } else {
            await recurse(data.path);
          }
        })
      );
    } else {
      processedCount++;
      const filePath = handleCreateFilePath(fileContent.path);

      const folder = zip.folder(filePath);
      const decodedContent = atob(fileContent.content);
      handleCreateFile(decodedContent, fileContent.name, folder as any);

      const progress = (processedCount / totalCount) * 100;
      progressCallback(progress);
    }
  };

  await recurse(path);

  const zipData = await zip.generateAsync({ type: "blob" });

  progressCallback(100);

  const folderName = handleGetFolderName(path);

  return { zipData, folderName };
};

const download = (zipData: Blob, folderName: string) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(zipData);
  downloadLink.download = `${folderName}.zip`;
  downloadLink.click();
};

export { download, handleDownloadZip };
