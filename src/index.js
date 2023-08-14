import { initInput, onInput, initPointer, track, init, Sprite, GameLoop } from 'kontra';
import loadAssets from './AssetsLoader';
import getImagesUrls from './AssetsUrls';
import drawWater from './DrawWater';

let { canvas } = init();

const cauldronFrameCanvas = document.getElementById('cauldron-frame');
const cauldronFrameCtx = cauldronFrameCanvas.getContext('2d');
cauldronFrameCtx.imageSmoothingEnabled = false;

const cauldronWaterCanvas = document.getElementById('cauldron-water');
const cauldronWaterCtx = cauldronWaterCanvas.getContext('2d');

//draw ./assets/cauldron.png on cauldronFrameCanvas
const assets = await loadAssets(getImagesUrls());
// console.log(assets);
// const cauldronFrame = new Image();
// cauldronFrame.src = './assets/cauldron.png';
// cauldronFrame.onload = () => {
cauldronFrameCtx.drawImage(assets[0], 0, 0, cauldronFrameCanvas.width, cauldronFrameCanvas.height);
//draw a circle on cauldronWaterCanvas radius 50% of cauldronFrameCanvas
// cauldronWaterCtx.beginPath();
// cauldronWaterCtx.arc(cauldronWaterCanvas.width / 2, cauldronWaterCanvas.height / 2, cauldronWaterCanvas.width / 2.7, 0, 2 * Math.PI);
// cauldronWaterCtx.fillStyle = '#aa4d8d';
// cauldronWaterCtx.fill();
drawWater(cauldronWaterCanvas, cauldronWaterCtx, '#aa4d8d');

// this function must be called first before pointer
// functions will work
initPointer();

initInput();

var ladlePosition = 0;

let heatTemperatureGoal = Sprite({
  x: 238,        // starting x,y position of the sprite.
  y: 70,
  color: 'purple',  // fill color of the sprite rectangle
  width: 8,     // width and height of the sprite rectangle
  height: 30,
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
      this.color = '#ff00ff33';
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
      this.color = '#ff00ff33';
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
      this.color = '#ff00ff33';
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
      this.color = '#ff00ff33';
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

let loop = GameLoop({  // create the main game loop
  update: function (dt) { // update the game state
    leftUpper.update();
    rightUpper.update();
    leftLower.update();
    rightLower.update();
    heatTemperature.update(dt);

  },
  render: function () { // render the game state
    leftUpper.render();
    rightUpper.render();
    leftLower.render();
    rightLower.render();
    heatTemperatureGoal.render();
    heatTemperature.render();
  }
});

loop.start();    // start the game
// }

