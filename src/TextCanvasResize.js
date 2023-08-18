export default function getScreenSize() {
    const screenWidth = window.screen.width;
    if (screenWidth > 1980) {
        return [2048, 1024]
    } else if (screenWidth > 1024) {
        return [1024, 512]
    } else if (screenWidth > 768) {
        return [768, 384]
    } else {
        return [512, 256]
    }
}

