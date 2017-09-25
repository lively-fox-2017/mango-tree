"use strict"
const FruitTree = require('./fruitTree.js');
const Apple = require('./apple.js');

class AppleTree extends FruitTree {
    constructor(age = 0, height = 0, matureAge = 3, healthyStatus = true) {
        super(new Apple(), age, 150, height, 12, 0.5, matureAge, 40, healthyStatus);
    }
}

module.exports = AppleTree;