"use strict"
var FruitTree = require('./fruit_tree.js');

class AppleTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(name, currentAge, currentHeight, berbuah, healthyStatus) {
    super(name, currentAge, currentHeight, berbuah, healthyStatus);
    this._maxAge = 10;
    this._heightGrow = 0.7;
  }
  // Produce some mangoes
}

module.exports = AppleTree;
