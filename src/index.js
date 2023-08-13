import { initPointer, track, init, Sprite, GameLoop } from 'kontra';

let { canvas } = init();

const cauldronFrameCanvas = document.getElementById('cauldron-frame');
const cauldronFrameCtx = cauldronFrameCanvas.getContext('2d');
cauldronFrameCtx.imageSmoothingEnabled = false;

const cauldronWaterCanvas = document.getElementById('cauldron-water');
const cauldronWaterCtx = cauldronWaterCanvas.getContext('2d');

//draw ./assets/cauldron.png on cauldronFrameCanvas
const cauldronFrame = new Image();
cauldronFrame.src = './assets/cauldron.png';
cauldronFrame.onload = () => {
  cauldronFrameCtx.drawImage(cauldronFrame, 0, 0, cauldronFrameCanvas.width, cauldronFrameCanvas.height);
  //draw a circle on cauldronWaterCanvas radius 50% of cauldronFrameCanvas
  cauldronWaterCtx.beginPath();
  cauldronWaterCtx.arc(cauldronWaterCanvas.width / 2, cauldronWaterCanvas.height / 2, cauldronWaterCanvas.width / 2.7, 0, 2 * Math.PI);
  cauldronWaterCtx.fillStyle = '#aa4d8d';
  cauldronWaterCtx.fill();


  // this function must be called first before pointer
  // functions will work
  initPointer();

  var ladlePosition = 0;

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
    update: function () { // update the game state
      leftUpper.update();
      rightUpper.update();
      leftLower.update();
      rightLower.update();

    },
    render: function () { // render the game state
      leftUpper.render();
      rightUpper.render();
      leftLower.render();
      rightLower.render();
    }
  });

  loop.start();    // start the game
}

