export default class Recipe {
    constructor(name, time, ingredients, instructions, events) {
        this.name = name;
        this.time = time;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.events = events;
    }
}