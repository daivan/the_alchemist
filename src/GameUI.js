import { GameObjectClass, Sprite, Text } from 'kontra';

export default class GameUI extends GameObjectClass{

  
    overlay = Sprite({
        x: 0,
        y: 0,
        width: 1000,
        height: 1000,
        color: 'white'
    });
    
    header = Text({
        text: 'The Alchemist',
        font: '15px Arial',
        color: 'black',
        x: 256,
        y: 30,
        anchor: {x: 0.5, y: 0.5},
        textAlign: 'center'
      });

    subText = Text({
        text: 'Press space to start',
        font: '15px Arial',
        color: 'black',
        x: 256,
        y: 100,
        anchor: {x: 0.5, y: 0.5},
        textAlign: 'center'
    });


    constructor(properties) {
        super(properties)
      }

    update(dt) {

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
            this.overlay.render()
            this.header.render()
            this.subText.render()
        }
    }
}