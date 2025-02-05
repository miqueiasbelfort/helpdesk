export const fileFormater = (filename, id) => {
    if (!filename || !id) {
      throw new Error("Filename and id are required.");
    }
  
    const parts = filename.split('.');
    if (parts.length < 2) {
      throw new Error("Invalid file format.");
    }
  
    const extension = parts.pop().toLowerCase();
    const imageExtensions = ['jpg', 'jpeg', 'png'];
  
    const prefix = imageExtensions.includes(extension) ? 'Imagen' : 'Arquivo';
    return `${prefix} ${id}.${extension}`;
  };