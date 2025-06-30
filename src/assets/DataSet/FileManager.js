import { base_url as base } from "../../../config";

const filePaths = {
    images: "/images",
    background: "/images/BackgroundImage",
    icons: "/images/icons",
    downloads: "/downloads",
}

const getFilePath = (folderKey, fileName) => {
    const folderPath = filePaths[folderKey];
    if (!folderPath) {
        console.error(`Invalid folder key: ${folderKey}`);
        return "";
    }
    // Use encodeURIComponent but then decode back the characters we want to allow
    const encodedFileName = encodeURIComponent(fileName)
        .replace(/%3D/g, '=')
        .replace(/%2C/g, ',')
    return `${base}${folderPath}/${encodedFileName}`;
};

const path = (folderKey, fileNames) => {
    if (Array.isArray(fileNames) && fileNames.length === 1 && typeof fileNames[0] === "object") {
        const fileObject = fileNames[0];
        const result = {};

        for (const [key, fileName] of Object.entries(fileObject)) {
            result[key] = getFilePath(folderKey, fileName);
        }
        return result;
    }
    return fileNames.map(fileName => getFilePath(folderKey, fileName));
};

export default path;

// Use examples:
// import path from '@/assets/DataSet/FileManager.js';
// const images = path("background", ["image1.jpg"]);
// const icons = path("icons", ["icon1.png", "icon2.png"]);