'use strict'

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, health) {
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 15);
    this._fruits = fruits;
    this._produce = 0;
    this._health = true;
    this._addHeight = Math.floor((Math.random() * (5 - 1)) + 10) / 10;
    this.mature = 3;
    this.maxAge = 20;
    this.maxGrow = 15;
    this.maxHeight = 6.5;

  }

  getAge() {
    return this._age;
  }

  getHeight() {
    if (this._height < this.maxHeight)
    return this._height;
    else {
      return this.maxHeight;
    }
  }

  getFruits() {
    return this._fruits;
  }

  getHealtyStatus() {
    return this._health;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age === this.maxAge)
    this._health = false;

    if (this._age === this.mature)
    this._mature = true;

    this._height += this._addHeight;

    if (this._age >= this.mature || this._age <= this.maxAge)
    this._fruits = this._maxFruit;


  }

  // Produce some mangoes
  produceMangoes() {
    return this._fruits;
  }

  // Get some fruits
  harvest() {
    let stats = Math.floor(Math.random() * this._fruits);
    this._bad = this._fruits - stats;
    this._quality = stats + ' good ' + this._bad + ' bad';
    return this._quality;
  }

}

class Mango {
  // Produce a mango
  constructor() {
  }
}

// * driver code untuk release 0
let mangoTree = new MangoTree(1, 1.3, 5, true)
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log('[Year '+ mangoTree.getAge() + ' Report] Height = ' + mangoTree.getHeight() + ' | Fruits harvested = ' + mangoTree.harvest());
  //   console.log(`[Year '+mangoTree.getAge() Report] Height = ${this._height} | Fruits harvested = ${tree._harvested}`)
} while (mangoTree.getHealtyStatus() != false);
// console.log(mangoTree.getAge());


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

// let mangga = new MangoTree(1, 1.3, 5, true);
// mangga.grow()
//
// console.log(mangga.getAge());
// console.log(mangga.getHeight());
// console.log(mangga.getFruits());
// console.log(mangga.getHealtyStatus());
// console.log(mangga.produceMangoes());
// console.log(mangga.harvest());
