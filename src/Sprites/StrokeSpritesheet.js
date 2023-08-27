import { SpriteSheet } from 'kontra';

export default function getStrokeSpritesheet(image) {
    return new SpriteSheet({
        image: image, 
        frameWidth: 55,
        frameHeight: 24,
        animations: {
            swirl: {
                frames: '0..6',
                frameRate: 10, 
                loop: false
            }
        },
        name: 'stroke' 
    });
}
