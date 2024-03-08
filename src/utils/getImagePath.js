// Get image's relative path

const basePath = process.env.REACT_APP_ASSETS_PATH || "/assets/img/fruits";

export const getImagePath = (imageName) => `${basePath}/${imageName}`;
