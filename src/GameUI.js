import { GameObjectClass, Sprite, Text } from 'kontra';

import CustomText from './CustomText.js';

export default class GameUI extends GameObjectClass {

  
  header = new CustomText(
    'The Alchemist',
    15,
    'Arial',
    'white',
    256,
    30,
    'middle',
    'center'
  );

  subText = new CustomText(
    'Press space to start',
    15,
    'Arial',
    'white',
    256,
    100,
    'middle',
    'center'
  );

  ingredientsText = new Text({
    text: '',
    font: '10px Arial',
    color: 'black',
    x: 280,
    y: 185,
    textAlign: 'left'
  });

  scoreText = new Text({
    score: 0,
    text: 'Score: ',
    font: '10px Arial',
    color: 'black',
    x: 5,
    y: 217,
    textAlign: 'left',
    update: function (dt) {
      this.text = 'Score: ' + this.score;

    }
  });


  temperatureText = new Text({
    text: 'Heat\nStirr',
    font: '10px Arial',
    color: 'black',
    x: 5,
    y: 227,
    textAlign: 'left'
  });

  heatTemperatureGoal = Sprite({
    x: 120,
    y: 229,
    color: 'purple',
    width: 30, 
    height: 6,
  });

  heatTemperature = Sprite({
    temperatureValue: 100,
    x: 50,
    y: 230,
    color: 'green',
    width: 100, 
    height: 4,
    update: function (dt) {
      this.width = this.temperatureValue;
      if (this.temperatureValue < 70 || this.temperatureValue > 100) {
        this.color = 'red';
      } else {
        this.color = 'green';
      }
    }
  });

  stirTemperatureGoal = Sprite({
    x: 120,
    y: 239,
    color: 'purple',
    width: 30, 
    height: 6,
  });

  stirTemperature = Sprite({
    temperatureValue: 100,
    x: 50,
    y: 240,                
    color: 'green',
    width: 100, 
    height: 4,
    update: function (dt) {
      this.width = this.temperatureValue;
      if (this.temperatureValue < 70 || this.temperatureValue > 100) {
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
    this.ingredientsText.text = gameState.ingredients.map((ingredient, index) => {
      return `${index + 1}: ${ingredient}`
    }).join('\n');

    this.scoreText.score = gameState.score;
    this.scoreText.update(dt);
    this.heatTemperature.temperatureValue = gameState.heatTemperature;
    this.heatTemperature.update(dt);
    this.stirTemperature.temperatureValue = gameState.stirTemperature;
    this.stirTemperature.update(dt);
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
      this.header.render(gameState.textCtx, gameState.scaleFactor, 'black');
      this.subText.render(gameState.textCtx, gameState.scaleFactor)
    } else {
      this.temperatureText.render()
      this.heatTemperatureGoal.render()
      this.heatTemperature.render()
      this.stirTemperatureGoal.render()
      this.stirTemperature.render()
      this.scoreText.render()
      this.ingredientsText.render()
    }
  }
}