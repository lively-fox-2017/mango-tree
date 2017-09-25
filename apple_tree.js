'use strict'

let FruitTree = require('./fruit_tree.js');

class AppleTree extends FruitTree {

  constructor(name, heightIncrement, stoppedGrowingAt, startProducing, fruitsPerYear) {

    super(name, heightIncrement, stoppedGrowingAt, startProducing, fruitsPerYear);

  }

}

module.exports = AppleTree;
