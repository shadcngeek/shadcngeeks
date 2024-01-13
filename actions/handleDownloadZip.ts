import handleGetFileName from "./handleGetFileName";

const handleDownloadZip = async (folderPath: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/download", {
      headers: { "content-type": "application/zip" },
      method: "POST",
      body: JSON.stringify({ folderToZip: folderPath }),
    });
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
