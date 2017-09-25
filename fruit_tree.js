"use strict"

var Mango = require('./mango.js');
var Apple = require('./apple.js');
var Pear = require('./pear.js');
// Release 2
class FruitTree {
  // Initialize a new MangoTree
  constructor(name, currentAge, currentHeight, berbuah, healthyStatus) {
    this._age = currentAge;
    this._maxAge = 0;
    this._heightGrow = 0;
    this._height = currentHeight;
    this._maxFruit = 0;
    this.treeName = name;
    this.startBerbuah = berbuah;
    this._fruits = [];
    this._harvested = 0;
    this.healthyStatus = healthyStatus;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruits;
  }
  getHealtyStatus() {
    return this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    this._harvested = 0;
    this._fruits = [];
    if (this._age < this._maxAge) {
      this._height = this._height + this._heightGrow;
    } else {
      this.healthyStatus = false;
    }
  }

  // Get some fruits
  harvest() {
    this._harvested += this._fruits.bad;
    this._harvested += this._fruits.good;
    this._maxFruit += this._fruits.bad;
    this._maxFruit += this._fruits.good;
  }

  produceFruits() {
    if (this._age >= this.startBerbuah) {
      if (this.healthyStatus === true) {
        var random = Math.floor(Math.random() * 5) + 1;
        for (var i = 0; i < random; i++) {
          var quality = ['good', 'bad'];
          var fruitQuality = quality[Math.floor(Math.random() * 2)];
          let fruit = null;
          if(this.treeName.indexOf("Mango") > -1){
            fruit = new Mango("Mango",fruitQuality);
          }
          else if(this.treeName.indexOf("Apple")>-1){
            fruit = new Apple("Apple", fruitQuality);
          }
          else{
            fruit = new Pear("Pear", fruitQuality);
          }
          this._fruits.push(fruit);
        }
      }
    }
  }
}

module.exports = FruitTree;
