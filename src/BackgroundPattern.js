export default function getBackgroundPattern() {
    const patternCanvas = document.createElement("canvas");
    const patternCtx = patternCanvas.getContext("2d");

    const squareSize = 32; // Size of the square

    patternCanvas.width = squareSize;
    patternCanvas.height = squareSize;

    // Fill the square with the middle color
    patternCtx.fillStyle = "#566e78";
    patternCtx.fillRect(0, 0, squareSize, squareSize);

    // Draw lines along the edges with the specified colors and thicker width
    const lineWidth = 6; // Adjust the line width
    patternCtx.lineWidth = lineWidth;
    patternCtx.strokeStyle = "#7e9597"; // Top and right edge color
    patternCtx.beginPath();
    patternCtx.moveTo(0, 0);
    patternCtx.lineTo(squareSize, 0);
    patternCtx.lineTo(squareSize, squareSize);
    patternCtx.stroke();

    patternCtx.strokeStyle = "#1f2e38"; // Left and bottom edge color
    patternCtx.beginPath();
    patternCtx.moveTo(0, 0);
    patternCtx.lineTo(0, squareSize);
    patternCtx.lineTo(squareSize, squareSize);
    patternCtx.stroke();

    return patternCanvas;
}