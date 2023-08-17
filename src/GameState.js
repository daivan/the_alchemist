import { GameObjectClass } from 'kontra';

import GameUI from './GameUI';

export default class GameState extends GameObjectClass{

    level = 0
    recipe = 0

    timePassed = 0
    clockwise = 10
    recipeTime = 0

    everySecond = 1;

    state = 'start_screen'
    gameStarted = false

    gameUI = new GameUI()

    constructor(properties) {
        super(properties)
      }


    reset(){
        this.timePassed = 0
        this.level = 0
        this.recipe = 0
        this.loadRecipe()
    }

    loadRecipe() {
        if (this.recipe === 0) {
            this.clockwise = 10
            this.recipeTime = 3
        }
    }

    addClockwiseStir(){
        this.clockwise--
    }

    isGameOver(){
        if (this.timePassed > this.recipeTime) {
            this.gameOver()
        }
    }

    gameOver(){
        this.reset()
        this.state = 'game_over'
    }

    isRecipeComplete(){
        if (this.clockwise === 0) {
            return true
        }
        return false
    }

    update(dt) {
        this.gameUI.update(dt)
        
        this.everySecond -= dt;
        // run every second
        if (this.everySecond < 0) {
            this.timePassed++
            console.log('time passed: ', this.timePassed)
            this.everySecond = 1;
            this.isGameOver()
        }
    }

    render() {
        this.gameUI.render(this)
    }
}