'use strict'

class Fruit {

  constructor () {
    this.qualities = ['good', 'bad'];
    this.quality = this.qualities[Math.round(Math.random())];
  }

}

module.exports = Fruit;
