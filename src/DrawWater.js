export default function drawWater(canvas, ctx, color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 2, canvas.width / 5.4, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}