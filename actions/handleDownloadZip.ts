const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://shadcngeeks.vercel.app"
    : "http://localhost:3000";

const handleGetFileName = (pathName: string) => {
  const fileName = pathName.split("/").pop();
  return fileName;
};

const handleDownloadZip = async (folderPath: string) => {
  try {
    const response = await fetch(`${siteUrl}/api/download`, {
      headers: { "content-type": "application/zip" },
      method: "POST",
      body: JSON.stringify({ folderToZip: folderPath }),
    });
    console.log(await response.json());
    const blob = await response.blob();
    // Create a temporary URL and initiate the download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    const folderName = handleGetFileName(folderPath);
    link.setAttribute("download", `${folderName}.zip`);
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
  }
};

export default handleDownloadZip;
