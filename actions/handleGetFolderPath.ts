const handleGetFolderPath = (folderName: string): string => {
  const path = `components/${folderName}`;
  return path;
};

export default handleGetFolderPath;
