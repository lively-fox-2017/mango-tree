"use strict"
const FruitTree = require('./fruitTree.js');
const Mango = require('./mango.js');

class MangoTree extends FruitTree {
    constructor(age = 0, height = 0, matureAge = 3, healthyStatus = true) {
        super(new Mango, age, 300, height, 30, 0.8, matureAge, 30, healthyStatus);
    }
}

module.exports = MangoTree;