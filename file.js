function getFilenameExtension(filename) {
    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) {
      return "";
    } else {
      return filename.substring(lastDotIndex + 1);
    }
  }
  
  const filename = "file1.pb";
  const extension = getFilenameExtension(filename);
  console.log(extension);
  