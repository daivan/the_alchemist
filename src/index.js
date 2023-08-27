import { initInput, onInput, initPointer, track, init, Sprite, GameLoop, getPointer } from 'kontra';
import { zzfx } from 'zzfx';
/*
import { loadAsset, spliceAssets } from './AssetsLoader';
import drawWater from './DrawWater';
import getSprite from './Sprites/Sprite';
import getBubbleSpritesheet from './Sprites/Bubble';
import getStrokeSpritesheet from './Sprites/StrokeSpritesheet';
import getRandomCordsInCaulrdon from './RandomCordsInCaulron';
//import getBackgroundPattern from './BackgroundPattern';
import getRecipes from './Recipes';
import getRecipeTimerText from './RecipeTimer';
import { createRecipeText } from './RecipeText';
//import getScreenSize from './TextCanvasResize';
*/
import GameState from './GameState';

let { canvas, context } = init();

let gameState = new GameState(0);

gameState.reset();

//const allSprites = loadAsset();
//const assets = spliceAssets(allSprites);

initPointer();
initInput();

var ladlePosition = 0;


onInput(['space'], function (e) {
  gameState.spacePressed();
  if (gameState.state === 'start_screen' || gameState.state === 'game_over') {
    gameState.gameStarted = true;
    gameState.state = 'playing';
    zzfx(...[1.29,,63,,.02,.04,4,.4,,-0.1,-50,,,-0.1,1,.6,.01,,.09,.17]); // Random 0 - Mutation 1
  }
});
onInput(['1'], function (e) {
  gameState.onePressed();
});
onInput(['2'], function (e) {
  gameState.twoPressed();
});
onInput(['3'], function (e) {
  gameState.threePressed();
});

let sprite = Sprite({
  x: 300,
  y: 100,
  anchor: {x: 0.5, y: 0.5},

  // required for a rectangle sprite
  width: 20,
  height: 40,
  color: 'red'
});
sprite.render();

let leftUpper = Sprite({
  x: 28,        // starting x,y position of the sprite.
  y: 28,
  color: '#000',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 0) {
      //if (spritesToRender.strokes.length === 0) {
        addStroke();
      //}
    }
    this.color = '#333';
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 0) {
      ladlePosition = 1;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#000';
  },
});

let rightUpper = Sprite({
  x: 128,        // starting x,y position of the sprite.
  y: 28,
  color: '#000',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 1) {
      //if (spritesToRender.strokes.length === 0) {
        addStroke();
      //}
    }
    this.color = '#333';
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 1) {
      ladlePosition = 2;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#000';
  },
});


let rightLower = Sprite({
  x: 128,        // starting x,y position of the sprite.
  y: 128,
  color: '#000',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 2) {
      //if (spritesToRender.strokes.length === 0) {
        addStroke();
      //}
    }
    this.color = '#333';
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 2) {
      ladlePosition = 3;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#000';
  },
});

let leftLower = Sprite({
  x: 28,        // starting x,y position of the sprite.
  y: 128,
  color: '#000',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function () {
    // handle on over events on the sprite
    if (ladlePosition === 3) {
      //if (spritesToRender.strokes.length === 0) {
        addStroke();
      //}
    } else {
      this.color = '#333';
    }
  },
  onOut: function () {
    // handle on over events on the sprite
    if (ladlePosition === 3) {
      ladlePosition = 0;
      gameState.addClockwiseStir();
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = '#000';
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
    /*
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
    if (gameState.isBoiling && dtCounter > 0.1 && spritesToRender.bubbles.length < 15) {
      const [x, y] = getRandomCordsInCaulrdon(canvas);
      spritesToRender.bubbles.push(getSprite(bubbleSpritesheet, x, y, (Math.random() + 10) / 2));
      dtCounter = 0.0;
    }
    spritesToRender.bubbles.forEach(sprite => {
      sprite.update();
    });

*/

  },
  render: function () { // render the game state



    gameState.render();


    if (gameState.state !== 'playing') {

    } else {
      leftUpper.render();
      rightUpper.render();
      leftLower.render();
      rightLower.render();
    }


    /*
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
    */

    //textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    //timerText.render(textCtx, textCanvasFactor);
    //recipeTexts.forEach(text => text.render(textCtx, textCanvasFactor));

    
  }
});

loop.start();    // start the game
// }

function addStroke() {
  const pointer = getPointer();
  console.log(pointer)
  //spritesToRender.strokes.push(getSprite(strokeSpritesheet, Math.floor(pointer.x), Math.floor(pointer.y), scale));
}