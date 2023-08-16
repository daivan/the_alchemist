export default function getBackgroundPattern() {
    const patternCanvas = document.createElement("canvas");
    const patternCtx = patternCanvas.getContext("2d");

    const squareSize = 32;

    patternCanvas.width = squareSize;
    patternCanvas.height = squareSize;

    patternCtx.fillStyle = "#566e78";
    patternCtx.fillRect(0, 0, squareSize, squareSize);

    const lineWidth = 6;
    patternCtx.lineWidth = lineWidth;
    patternCtx.strokeStyle = "#7e9597";
    patternCtx.beginPath();
    patternCtx.moveTo(0, 0);
    patternCtx.lineTo(squareSize, 0);
    patternCtx.lineTo(squareSize, squareSize);
    patternCtx.stroke();

    patternCtx.strokeStyle = "#1f2e38";
    patternCtx.beginPath();
    patternCtx.moveTo(0, 0);
    patternCtx.lineTo(0, squareSize);
    patternCtx.lineTo(squareSize, squareSize);
    patternCtx.stroke();

    return patternCanvas;
}