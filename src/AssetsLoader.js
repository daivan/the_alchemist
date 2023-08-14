export default function loadAssets(urls) {
    return Promise.all(urls.map(loadAsset));
}

function loadAsset(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (error) => reject(error);
        image.src = url;
    });
}