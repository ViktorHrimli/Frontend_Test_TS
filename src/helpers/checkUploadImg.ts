// max size img
const SIZE = 5000000;
const arrayFormat = [".jpg", ".png", ".jpeg", ".webp"];

const checkUploadFile = (name: string, size: number): boolean => {
  const format = name.slice(name.lastIndexOf("."));

  return arrayFormat.includes(format) && SIZE > size;
};

export { checkUploadFile };
