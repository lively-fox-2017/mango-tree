'use strict'

let Fruit = require('./fruit.js');

class FruitTree {

  constructor (name, heightIncrement, stoppedGrowingAt, startProducing, fruitsPerYear, age = 0, height = 0, health = true) {

    this._name             = name;
    this._fruits           = [];
    this._qualityCounts    = [0, 0];
    this._harvested        = 0;
    this._age              = age;
    this._height           = height;
    this._health           = health;
    this._stoppedGrowingAt = stoppedGrowingAt;
    this._deadAt           = Math.floor(Math.random() * (25 - 20) + 20);

    this._heightIncrement  = heightIncrement;
    this._stoppedGrowingAt = stoppedGrowingAt;
    this._startProducing   = startProducing;
    this._fruitsPerYear    = fruitsPerYear;

  }

  getName() {

    return this._name;

  }

  getAge () {

    return this._age;

  }

  getHeight () {

    return this._height;

  }

  getFruits () {

    return this._fruits;

  }

  getHealthStatus () {

    return this._health;

  }

  getStartProducing () {

    return this._startProducing;

  }

  grow () {

    this._qualityCounts = [0, 0];

    if (this._age === this._deadAt) {

      this._health = false;

    } else {

      if (this._age < this._stoppedGrowingAt) {

        this._height += this._heightIncrement;

      }

      this._age += 1;

    }

  }

  produceFruits () {

    if (this._age >= this._startProducing) {

      for (let i = 0; i < this._fruitsPerYear; i++) {

        let fruit = new Fruit;

        this._fruits.push(fruit.quality);

      }

    }

  }

  harvest () {

    this._harvested = this._fruits.length;

    for (let i = 0; i < this._fruits.length; i++) {

      if (this._fruits[i] === 'good')
        this._qualityCounts[0] += 1;
      else
        this._qualityCounts[1] += 1;

    }

    this._fruits = [];

  }

}

module.exports = FruitTree;
