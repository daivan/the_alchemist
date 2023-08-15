export default function getRandomCordsInCaulrdon(canvas) {
    const theta = Math.random() * Math.PI * 2; // Random angle between 0 and 2π
    const r = Math.sqrt(Math.random()) * Math.floor(canvas.width / 7); // Random radius between 0 and the circle's radius
    const center = canvas.width / 2;
    const x = Math.floor(center / 2 + r * Math.cos(theta)); // Convert to Cartesian x-coordinate
    const y = Math.floor(center / 2 + r * Math.sin(theta)); // Convert to Cartesian y-coordinate

    return [x, y];
}