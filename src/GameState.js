import { GameObjectClass } from 'kontra';

import GameUI from './GameUI';

export default class GameState extends GameObjectClass {

    recipe = 0
    timePassed = 0
    clockwise = 10
    recipeTime = 0

    everySecond = 1;

    state = 'start_screen'
    gameStarted = false

    heatTemperature = 0
    heatTemperatureGoal = 0
    isBoiling = false

    stirTemperature = 0
    stirTemperatureGoal = 0

    gameUI = new GameUI()

    textCtx;
    scaleFactor;
    score = 0

    constructor(properties, textCtx, scaleFactor) {
        super(properties)
        this.textCtx = textCtx;
        this.scaleFactor = scaleFactor;
    }


    emittedHello() {
        console.log('we did good')
    }
    spacePressed() {
        if (this.gameStarted === true) {
            this.heatTemperature = this.heatTemperature + 10
            console.log('space pressed: ', this.heatTemperature)
        }
    }

    addClockwiseStir() {
        if (this.gameStarted === true) {
            this.stirTemperature = this.stirTemperature + 10
            console.log('Rotated: ', this.stirTemperature)
        }
    }

    reset() {
        this.gameStarted = false
        this.timePassed = 0
        this.recipe = 0
        this.score = 0
        this.loadRecipe()
    }

    loadRecipe() {
        if (this.recipe === 0) {
            this.clockwise = 10
            this.recipeTime = 60
        }
    }

    isGameOver() {
        if (this.timePassed > this.recipeTime) {
            this.gameOver()
        }
    }

    gameOver() {
        this.reset()
        this.state = 'game_over'
    }

    isRecipeComplete() {
        if (this.clockwise === 0) {
            return true
        }
        return false
    }

    update(dt) {
        this.gameUI.update(dt, this)
        if (this.heatTemperature > 100) {
            this.isBoiling = true
        } else {
            this.isBoiling = false
        }

        this.everySecond -= dt;
        // run every second
        if (this.gameStarted === true && this.everySecond < 0) {
            this.timePassed++
            this.everySecond = 1;
            this.isGameOver()
        }
        if (this.gameStarted === true) {
            if (this.heatTemperature > 1) {
                this.heatTemperature = this.heatTemperature - 5 * dt
            }
            if (this.stirTemperature > 1) {
                this.stirTemperature = this.stirTemperature - 5 * dt
            }
            
        }
        
    }

    render() {
        this.gameUI.render(this);
    }
}