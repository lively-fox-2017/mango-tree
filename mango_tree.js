"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, health) {
    this._age = age;
    this._heigth = heigth;
    this._fruits = fruits;
    this._health = health
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._fruits
  }
  getHealtyStatus() {
    return this._health
  }


  // Get current states here

  // Grow the tree
  grow() {
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._arrQuality = ['good', 'bad']
    this._quality = this.fruitQuality()
  }

  fruitQuality(){
    return this._arrQuality[Math.floor(Math.random() * 2)]
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
