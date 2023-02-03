export const getStaticFilePath = (filePath: string) => {
    return `${filePath}`;
};

export const getStaticImageFilePath = (imageFileName: string) => {
    return getStaticFilePath(`/assets/images/${imageFileName}`);
};