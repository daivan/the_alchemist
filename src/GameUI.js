import { GameObjectClass, Sprite } from 'kontra';
import Text from './Text.js';

export default class GameUI extends GameObjectClass {

  // overlay = Sprite({
  //   x: 0,
  //   y: 0,
  //   width: 1000,
  //   height: 1000,
  //   color: 'black'
  // });

  // header = Text({
  //   text: 'The Alchemist',
  //   font: '15px Arial',
  //   color: 'white',
  //   x: 256,
  //   y: 30,
  //   anchor: { x: 0.5, y: 0.5 },
  //   textAlign: 'center'
  // });

  header = new Text(
    'The Alchemist',
    15,
    'Arial',
    'white',
    256,
    30,
    'middle',
    'center'
  );


  // subText = Text({
  //   text: 'Press space to start',
  //   font: '15px Arial',
  //   color: 'white',
  //   x: 256,
  //   y: 100,
  //   anchor: { x: 0.5, y: 0.5 },
  //   textAlign: 'center'
  // });
  subText = new Text(
    'Press space to start',
    15,
    'Arial',
    'white',
    256,
    100,
    'middle',
    'center'
  );

  heatTemperatureGoal = Sprite({
    x: 238,        // starting x,y position of the sprite.
    y: 70,
    color: 'purple',  // fill color of the sprite rectangle
    width: 8,     // width and height of the sprite rectangle
    height: 30,
  });

  heatTemperature = Sprite({
    temperatureValue: 100,
    x: 240,        // starting x,y position of the sprite.
    y: 10,
    color: 'green',  // fill color of the sprite rectangle
    width: 4,     // width and height of the sprite rectangle
    height: 100,
    update: function (dt) {
      this.height = this.temperatureValue;
      if (this.temperatureValue < 60 || this.temperatureValue > 90) {
        this.color = 'red';
      } else {
        this.color = 'green';
      }
    }
  });

  stirTemperatureGoal = Sprite({
    x: 248,        // starting x,y position of the sprite.
    y: 70,
    color: 'purple',  // fill color of the sprite rectangle
    width: 8,     // width and height of the sprite rectangle
    height: 30,
  });

  stirTemperature = Sprite({
    temperatureValue: 100,
    x: 250,        // starting x,y position of the sprite.
    y: 10,
    color: 'green',  // fill color of the sprite rectangle
    width: 4,     // width and height of the sprite rectangle
    height: 100,
    update: function (dt) {
      this.height = this.temperatureValue;
      if (this.temperatureValue < 60 || this.temperatureValue > 90) {
        this.color = 'red';
      } else {
        this.color = 'green';
      }
    }
  });

  constructor(properties) {
    super(properties)
  }

  update(dt, gameState) {
    this.heatTemperature.temperatureValue = gameState.heatTemperature;
    this.heatTemperature.update(dt);
    this.stirTemperature.temperatureValue = gameState.stirTemperature;
    this.stirTemperature.update(dt);
    //console.log('game ui update')
  }

  render(gameState) {

    if (gameState.state !== 'start_screen') {

      this.header.text = 'The Alchemist'
      this.subText.text = 'Press space to start'
    }

    if (gameState.state === 'game_over') {
      this.header.text = 'Game over'
      this.subText.text = 'Press space to start to play again'
    }

    if (gameState.state !== 'playing') {
      // this.overlay.render()
      this.header.render(gameState.textCtx, gameState.scaleFactor, 'black');
      this.subText.render(gameState.textCtx, gameState.scaleFactor)
    } else {
      this.heatTemperatureGoal.render();
      this.heatTemperature.render();
      this.stirTemperatureGoal.render();
      this.stirTemperature.render();
    }


  }
}