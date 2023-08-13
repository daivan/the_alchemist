import { initPointer, track, init, Sprite, GameLoop } from 'kontra';

let { canvas } = init();

// this function must be called first before pointer
// functions will work
initPointer();

var ladlePosition = 0;

let leftUpper = Sprite({
  x: 28,        // starting x,y position of the sprite.
  y: 28,
  color: 'blue',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function() {
    // handle on over events on the sprite
    if (ladlePosition === 0) {
      this.color = 'purple';
    } 
  },
  onOut: function() {
    // handle on over events on the sprite
    if (ladlePosition === 0) {
      ladlePosition = 1;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = 'blue';
  },
});

let rightUpper = Sprite({
  x: 128,        // starting x,y position of the sprite.
  y: 28,
  color: 'blue',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function() {
    // handle on over events on the sprite
    if (ladlePosition === 1) {
      this.color = 'purple';
    } 
  },
  onOut: function() {
    // handle on over events on the sprite
    if (ladlePosition === 1) {
      ladlePosition = 2;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = 'blue';
  },
});


let rightLower = Sprite({
  x: 128,        // starting x,y position of the sprite.
  y: 128,
  color: 'blue',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function() {
    // handle on over events on the sprite
    if (ladlePosition === 2) {
      this.color = 'purple';
    } 
  },
  onOut: function() {
    // handle on over events on the sprite
    if (ladlePosition === 2) {
      ladlePosition = 3;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = 'blue';
  },
});

let leftLower = Sprite({
  x: 28,        // starting x,y position of the sprite.
  y: 128,
  color: 'blue',  // fill color of the sprite rectangle
  width: 100,     // width and height of the sprite rectangle
  height: 100,
  onOver: function() {
    // handle on over events on the sprite
    if (ladlePosition === 3) {
      this.color = 'purple';
    } else {
      this.color = 'blue';
    }
  },
  onOut: function() {
    // handle on over events on the sprite
    if (ladlePosition === 3) {
      ladlePosition = 0;
    }
    console.log('moving out of left upper', ladlePosition)
    this.color = 'blue';
  },
});


track(leftUpper);
track(rightUpper);
track(leftLower);
track(rightLower);

let loop = GameLoop({  // create the main game loop
  update: function() { // update the game state
    leftUpper.update();
    rightUpper.update();
    leftLower.update();
    rightLower.update();

  },
  render: function() { // render the game state
    leftUpper.render();
    rightUpper.render();
    leftLower.render();
    rightLower.render();
  }
});

loop.start();    // start the game