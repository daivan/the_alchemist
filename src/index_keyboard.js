import { init, Sprite, GameLoop, initKeys, keyPressed } from 'kontra';

// this function must be called first before keyboard
// functions will work
initKeys();

let { canvas } = init();

let sprite = Sprite({
  x: 100,        // starting x,y position of the sprite.
  y: 80,
  color: 'green',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 20,
  dx: 2          // move the sprite 2px to the right every frame
});

let loop = GameLoop({  // create the main game loop
  update: function() { // update the game state
    sprite.update();

    // wrap the sprites position when it reaches
    // the edge of the screen
    if (sprite.x > canvas.width) {
      sprite.x = -sprite.width;
    }
  },
  render: function() { // render the game state
    sprite.render();
  }
});

function update() {
  if (keyPressed('arrowleft')) {
    // move left
    console.log('left');
  }
}

loop.start();    // start the game