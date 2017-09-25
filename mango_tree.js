"use strict"

// Release 2
class FruitTree {
  // Initialize a new Tree
  constructor(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity) {
    this._age = 0;
    this._height = 0;
    this._capacity = 0;
    this._fruits = [];
    this._harvested = '';
    this._isHealthy = true;

    this.maxHeightInc = maxHeightInc;
    this.maxYearHeight = maxYearHeight;
    this.maxYearFruit = maxYearFruit;
    this.firstFruit = firstFruit;
    this.maxCapacity = maxCapacity;
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
  getHarvested() {
    return this._harvested;
  }
  getHealtyStatus() {
    return this._isHealthy;
  }


  // Get current states here
  // Grow the tree
  grow() {
    this._age += 1;
    if (this.getAge() <= this.maxYearHeight) {
      this._height += Math.floor(Math.random() * this.maxHeightInc) + 1;
    }
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
    if (this.getAge() === this.maxYearFruit) {
      this._isHealthy = false;
    }
  }
}

class Fruit {
  constructor(quality) {
    (quality === 0) ? this.quality = 'bad': this.quality = 'good';
  }
}

// release 0
class MangoTree extends FruitTree {
  // Produce some fruits
  produceFruits() {
    let fruits = [];
    this._capacity = Math.floor(Math.random() * this.maxCapacity) + 1;
    if (this.getHealtyStatus()) {
      for (let i = 0; i < this._capacity; i++) {
        let fruit = new Mango(Math.round(Math.random()));
        fruits.push(fruit);
      }
    }
    this._fruits = fruits;
  }
}
class Mango extends Fruit {
  // Produce a mango
  constructor(quality) {
    super(quality);
    this.fruitName = 'Mango';
  }
}

// Release 1
class AppleTree extends FruitTree {
  // Produce some fruits
  produceFruits() {
    let fruits = [];
    this._capacity = Math.floor(Math.random() * this.maxCapacity) + 1;
    if (this.getHealtyStatus()) {
      for (let i = 0; i < this._capacity; i++) {
        let fruit = new Apple(Math.round(Math.random()));
        fruits.push(fruit);
      }
    }
    this._fruits = fruits;
  }
}
class Apple extends Fruit {
  // Produce a mango
  constructor(quality) {
    super(quality);
    this.fruitName = 'Apple';
  }
}

// driver code untuk release 0
let appleTree = new AppleTree(20, 10, 20, 2, 23);
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.getAge()} Report] Height = ${appleTree.getHeight()} | ${appleTree._fruits[0].fruitName} harvested = ${appleTree.getHarvested()}`)
} while (appleTree.getHealtyStatus() != false)
let mangoTree = new MangoTree(21, 14, 15, 3, 20);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight()} | ${mangoTree._fruits[0].fruitName} harvested = ${mangoTree.getHarvested()}`)
} while (mangoTree.getHealtyStatus() != false)

//
// // Release 3
// class TreeGrove {}
