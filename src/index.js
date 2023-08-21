import { initInput, onInput, initPointer, track, init, Sprite, GameLoop, getPointer } from 'kontra';
import { loadAsset, spliceAssets } from './AssetsLoader';
import drawWater from './DrawWater';
import getSprite from './Sprites/Sprite';
import getBubbleSpritesheet from './Sprites/Bubble';
import getStrokeSpritesheet from './Sprites/StrokeSpritesheet';
import getRandomCordsInCaulrdon from './RandomCordsInCaulron';
import getBackgroundPattern from './BackgroundPattern';
import getRecipes from './Recipes';
import getRecipeTimerText from './RecipeTimer';
import { createRecipeText } from './RecipeText';
import getScreenSize from './TextCanvasResize';
import GameState from './GameState';


let { canvas, context } = init();
context.imageSmoothingEnabled = false;

const cauldronFrameCanvas = document.getElementById('frame');
const cauldronFrameCtx = cauldronFrameCanvas.getContext('2d');
cauldronFrameCtx.imageSmoothingEnabled = false;

const cauldronWaterCanvas = document.getElementById('water');
const cauldronWaterCtx = cauldronWaterCanvas.getContext('2d');

const backgroundCanvas = document.getElementById('background');
const backgroundCtx = backgroundCanvas.getContext('2d');
const backgroundPattern = backgroundCtx.createPattern(getBackgroundPattern(), "repeat");
backgroundCtx.fillStyle = backgroundPattern;

const textCanvas = document.getElementById('text');
const [textWidth, textHeight] = getScreenSize();
textCanvas.width = textWidth;
textCanvas.height = textHeight;
const textCtx = textCanvas.getContext('2d');
const textCanvasFactor = textCanvas.width / 512;
let gameState = new GameState(0, textCtx, textCanvasFactor);

gameState.reset();

const allSprites = await loadAsset();
const assets = spliceAssets(allSprites);

const bubbleSpritesheet = getBubbleSpritesheet(assets[1]);
const strokeSpritesheet = getStrokeSpritesheet(assets[0]);
cauldronFrameCtx.drawImage(assets[2], 0, 0, cauldronFrameCanvas.width / 2, cauldronFrameCanvas.height);
cauldronFrameCtx.drawImage(assets[3], cauldronFrameCanvas.width / 2 - 5, 0, cauldronFrameCanvas.width / 2 - 5, cauldronFrameCanvas.height);
cauldronFrameCtx.fillStyle = '#e8d5b0';
cauldronFrameCtx.beginPath();
cauldronFrameCtx.arc(32, 32, 24, 0, Math.PI * 2, true);
cauldronFrameCtx.fill();
drawWater(cauldronWaterCanvas, cauldronWaterCtx, '#aa4d8d');
const spritesToRender = {
  strokes: [],
  bubbles: []
};
backgroundCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

const recipes = getRecipes();
let currentRecipe = recipes[1];
const timerText = getRecipeTimerText(currentRecipe.time);
const recipeTexts = [];
currentRecipe.instructions.forEach((instruction, index) => {
  recipeTexts.push(createRecipeText(instruction, 296, 52 + index * 20));
});

initPointer();
initInput();

var ladlePosition = 0;
let isBoiling = true;


// let recipieTimer = Sprite({
//   timeGoal: 60,
//   timeLeft: 60,
//   x: 10,        // starting x,y position of the sprite.
//   y: 240,
//   color: 'green',  // fill color of the sprite rectangle
//   width: 240,     // width and height of the sprite rectangle
//   height: 4,
//   update: function (dt) {
//     this.timeLeft = this.timeLeft - 3 * dt;
//     this.width = 240 - ((this.timeLeft / this.timeGoal) * 240);
//     if (this.timeLeft < 30) {
//       this.color = 'orange';
//     } else if (this.timeLeft < 15) {
//       this.color = 'red';
//     }
//   }
// });



onInput(['space'], function (e) {
  gameState.spacePressed();
  if (gameState.state === 'start_screen' || gameState.state === 'game_over') {
    gameState.gameStarted = true;
    gameState.state = 'playing';
  }
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
      gameState.addClockwiseStir();
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
const startTime = Date.now();
let timeElapsed = 0;

let loop = GameLoop({  // create the main game loop
  update: function (dt) { // update the game state
    gameState.update(dt);
    timeElapsed = Date.now() - startTime;
    spritesToRender.strokes.forEach(sprite => {
      sprite.update();
    });
    leftUpper.update();
    rightUpper.update();
    leftLower.update();
    rightLower.update();
    if (timeElapsed < currentRecipe.time * 1000) {
      timerText.update(Math.ceil((currentRecipe.time - timeElapsed / 1000)));
    }

    // recipieTimer.update(dt);
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
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    timerText.render(textCtx, textCanvasFactor);
    recipeTexts.forEach(text => text.render(textCtx, textCanvasFactor));
    gameState.render();
  }
});

loop.start();    // start the game
// }

function addStroke(scale = 1) {
  const pointer = getPointer();
  spritesToRender.strokes.push(getSprite(strokeSpritesheet, Math.floor(pointer.x), Math.floor(pointer.y), scale));
}
