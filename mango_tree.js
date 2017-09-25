"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._capacity = 0;
    this._fruits = [];
    this._harvested = '';
    this._isHealthy = true;
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
    return this._isHealthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if (this.getAge() <= 12) {
      this._height += Math.floor(Math.random() * 28) + 1;
    } else if (this.getAge() === 20) {
      this._isHealthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let fruits = [];
    this._capacity = Math.floor(Math.random() * 20) + 1;
    if (this.getHealtyStatus()) {
      for (let i = 0; i < this._capacity; i++) {
        let fruit = new Mango(Math.round(Math.random()));
        fruits.push(fruit);
      }
    }
    this._fruits = fruits;
  }

  // Get some fruits
  harvest() {
    let countAll = 0;
    let countGood = 0;
    let countBad = 0;
    for (let i = 0; i < this.getFruits().length; i++) {
      countAll++;
      if (this._fruits[i].quality == 'good')
        countGood++;
      else
        countBad++;
    }
    this._harvested = countAll + ' (' + countGood + ' good, ' + countBad + ' bad)';
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    (quality === 0) ? this.quality = 'bad': this.quality = 'good';
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.getHealtyStatus() != false)

//
// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}
