import { Sprite } from 'kontra';

export default function getSprite(spriteSheet, x, y, scale = 1) {
    return Sprite({
        x: x,
        y: y,
        anchor: { x: 0.5, y: 0.5 },
        animations: spriteSheet.animations,
        scale: scale,
    });
}