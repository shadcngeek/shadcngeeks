const handleGetFileName = (pathName: string) => {
  const fileName = pathName.split("/").pop();
  return fileName;
};

export default handleGetFileName;
