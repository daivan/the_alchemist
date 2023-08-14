import { initInput, onInput, initPointer, track, init, Sprite, GameLoop, getPointer } from 'kontra';
import loadAssets from './AssetsLoader';
import drawWater from './DrawWater';
import getSprite from './Sprites/Sprite';
import getBubbleSpritesheet from './Sprites/Bubble';
import getStrokeSpritesheet from './Sprites/StrokeSpritesheet';
import getRandomCordsInCaulrdon from './RandomCordsInCaulron';
import getBackgroundPattern from './BackgroundPattern';

let { canvas, context } = init();
context.imageSmoothingEnabled = false;

const cauldronFrameCanvas = document.getElementById('cauldron-frame');
const cauldronFrameCtx = cauldronFrameCanvas.getContext('2d');
cauldronFrameCtx.imageSmoothingEnabled = false;

const cauldronWaterCanvas = document.getElementById('cauldron-water');
const cauldronWaterCtx = cauldronWaterCanvas.getContext('2d');

const backgroundCanvas = document.getElementById('background');
const backgroundCtx = backgroundCanvas.getContext('2d');
const backgroundPattern = backgroundCtx.createPattern(getBackgroundPattern(), "repeat");
backgroundCtx.fillStyle = backgroundPattern;
backgroundCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

const assets = await loadAssets();
const bubbleSpritesheet = getBubbleSpritesheet(assets[1]);
const strokeSpritesheet = getStrokeSpritesheet(assets[2]);
cauldronFrameCtx.drawImage(assets[0], 0, 0, cauldronFrameCanvas.width, cauldronFrameCanvas.height);
drawWater(cauldronWaterCanvas, cauldronWaterCtx, '#aa4d8d');
const spritesToRender = {
  strokes: [],
  bubbles: []
};

// this function must be called first before pointer
// functions will work
initPointer();

initInput();

var ladlePosition = 0;

let isBoiling = true;

let heatTemperatureGoal = Sprite({
  x: 238,        // starting x,y position of the sprite.
  y: 70,
  color: 'purple',  // fill color of the sprite rectangle
  width: 8,     // width and height of the sprite rectangle
  height: 30,
});

let recipieTimer = Sprite({
  timeGoal : 60,
  timeLeft: 60, 
  x: 10,        // starting x,y position of the sprite.
  y: 240,
  color: 'green',  // fill color of the sprite rectangle
  width: 240,     // width and height of the sprite rectangle
  height: 4,
  update: function (dt) {
    this.timeLeft = this.timeLeft - 3 * dt;
    this.width = 240 - ((this.timeLeft / this.timeGoal) * 240);
    if (this.timeLeft < 30) {
      this.color = 'orange';
    } else if (this.timeLeft < 15) {
      this.color = 'red';
    }
  }
});

let heatTemperature = Sprite({
  temperatureValue: 100,
  x: 240,        // starting x,y position of the sprite.
  y: 10,
  color: 'green',  // fill color of the sprite rectangle
  width: 4,     // width and height of the sprite rectangle
  height: 100,
  update: function (dt) {
    this.temperatureValue = this.temperatureValue - 10 * dt;
    this.height = this.temperatureValue;
    if (this.temperatureValue < 60 || this.temperatureValue > 90) {
      this.color = 'red';
    } else {
      this.color = 'green';
    }
  }
});

onInput(['space'], function (e) {
  heatTemperature.temperatureValue = heatTemperature.temperatureValue + 10;
  console.log(' *** space pressed ***')
});

let leftUpper = Sprite({
  x: 28,        // starting x,y position of the sprite.
  y: 28,
  color: '#0000ff00',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 0) {
      if (spritesToRender.strokes.length === 0) {
        addStroke();
      }
    }
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 0) {
      ladlePosition = 1;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#0000ff00';
  },
});

let rightUpper = Sprite({
  x: 128,        // starting x,y position of the sprite.
  y: 28,
  color: '#0000ff00',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 1) {
      if (spritesToRender.strokes.length === 0) {
        addStroke();
      }
    }
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 1) {
      ladlePosition = 2;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#0000ff00';
  },
});


let rightLower = Sprite({
  x: 128,        // starting x,y position of the sprite.
  y: 128,
  color: '#0000ff00',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 2) {
      if (spritesToRender.strokes.length === 0) {
        addStroke();
      }
    }
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 2) {
      ladlePosition = 3;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#0000ff00';
  },
});

let leftLower = Sprite({
  x: 28,        // starting x,y position of the sprite.
  y: 128,
  color: '#0000ff00',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 3) {
      if (spritesToRender.strokes.length === 0) {
        addStroke();
      }
    } else {
      this.color = '#0000ff00';
    }
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 3) {
      ladlePosition = 0;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#0000ff00';
  },
});


track(leftUpper);
track(rightUpper);
track(leftLower);
track(rightLower);

let dtCounter = 0.0;

let loop = GameLoop({  // create the main game loop
  update: function (dt) { // update the game state
    spritesToRender.strokes.forEach(sprite => {
      sprite.update();
    });
    leftUpper.update();
    rightUpper.update();
    leftLower.update();
    rightLower.update();
    heatTemperature.update(dt);
    recipieTimer.update(dt);
    dtCounter += dt;
    if (isBoiling && dtCounter > 0.1 && spritesToRender.bubbles.length < 15) {
      const [x, y] = getRandomCordsInCaulrdon(canvas);
      spritesToRender.bubbles.push(getSprite(bubbleSpritesheet, x, y, (Math.random() + 10) / 2));
      dtCounter = 0.0;
    }
    spritesToRender.bubbles.forEach(sprite => {
      sprite.update();
    });


  },
  render: function () { // render the game state
    spritesToRender.strokes.forEach((stroke, index) => {
      if (stroke.currentAnimation.isStopped) {
        spritesToRender.strokes.splice(index, 1);
      } else {
        stroke.render();
      }
    });
    spritesToRender.bubbles.forEach((sprite, index) => {
      if (sprite.currentAnimation.isStopped) {
        spritesToRender.bubbles.splice(index, 1);
      } else {
        sprite.render();
      }
    });
    leftUpper.render();
    rightUpper.render();
    leftLower.render();
    rightLower.render();
    heatTemperatureGoal.render();
    heatTemperature.render();
    recipieTimer.render();
  }
});

loop.start();    // start the game
// }

function addStroke(scale = 1) {
  const pointer = getPointer();
  spritesToRender.strokes.push(getSprite(strokeSpritesheet, pointer.x, pointer.y, scale));
}
