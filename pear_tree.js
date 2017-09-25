"use strict"
var FruitTree = require('./fruit_tree.js');

class PearTree extends FruitTree {
  constructor(name, currentAge, currentHeight, berbuah, healthyStatus) {
    super(name, currentAge, currentHeight, berbuah, healthyStatus);
    this._maxAge = 20
    this._heightGrow = 0.8;
  }
  // Produce some mangoes
}

module.exports = PearTree;
