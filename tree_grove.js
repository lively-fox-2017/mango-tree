'use strict'

let FruitTree = require('./fruit_tree.js');

class TreeGrove {

  constructor () {

    this._trees = [];

  }

  inputTree (name, age, height, startProducing, health) {


    let heightIncrement = Math.floor(Math.random() * (40 - 25) + 25);
    let stoppedGrowingAt = Math.floor(Math.random() * (10 - 5) + 5);
    let fruitsPerYear = Math.floor(Math.random() * (40 - 10) + 10);

    this._trees.push(new FruitTree(name, heightIncrement, stoppedGrowingAt, startProducing, fruitsPerYear, age, height, health));


  }

  showAge () {

    let output = '';

    for (let i = 0; i < this._trees.length; i++) {

      output += this._trees[i].getName() + ': ' + this._trees[i].getAge() + '\n';

    }

    return output;

  }

  showTrees () {

    return this._trees;

  }

  nextYear () {

    for (let i = 0; i < this._trees.length; i++) {

      this._trees[i].grow();

    }

  }

  matureTrees () {

    let output = [];

    for (let i = 0; i < this._trees.length; i++) {

      if (this._trees[i].getAge() === this._trees[i].getStartProducing())
        output.push(this._trees[i]);

    }

    return output;

  }

  deadTrees () {

    let output = [];

    for (let i = 0; i < this._trees.length; i++) {

      if (this._trees[i].getHealthStatus() === false)
        output.push(this._trees[i]);

    }

    return output;

  }

}

module.exports = TreeGrove;
