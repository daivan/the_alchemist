import { SpriteSheet } from 'kontra';

export default function getBubbleSpritesheet(image) {
    return new SpriteSheet({
        image: image,
        frameWidth: 32,
        frameHeight: 32,
        animations: {
            bubble: {
                frames: '0..6',
                frameRate: 5,
                loop: false
            }
        }
    });
}