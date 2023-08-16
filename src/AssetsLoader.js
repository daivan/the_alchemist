export default function loadAssets() {
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

const urls = [
    './assets/cauldron.png',
    './assets/bubble.png',
    './assets/stroke.png',
    './assets/table.png'
];