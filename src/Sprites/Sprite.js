import { Sprite } from 'kontra';

export default function getSprite(spriteSheet, x, y, options = {}) {
    return Sprite({
        x: x,
        y: y,
        animations: spriteSheet.animations
    });
}