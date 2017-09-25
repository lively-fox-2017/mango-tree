"use strict"
const FruitTree = require('./fruitTree.js');
const Pear = require('./pear.js');

class PearTree extends FruitTree {
    constructor(age = 0, height = 0, matureAge = 3, healthyStatus = true) {
        super(new Pear(), age, 150, height, 10, 0.4, matureAge, 35, healthyStatus);
    }
}

module.exports = PearTree;