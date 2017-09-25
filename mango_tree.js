"use strict"

// Release 2
class FruitTree {
  // Initialize a new MangoTree
  constructor(name) {
    this._age = 0;
    this._maxAge = 0;
    this._heightGrow = 0;
    this._height = 0;
    this._maxFruit = 0;
    this.treeName = name;
    this._fruits = {
      bad: 0,
      good: 0,
    };
    this._harvested = 0;
    this.healthyStatus = true;
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
    this._fruits.bad = 0;
    this._fruits.good = 0;
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

}
class Fruit {
  constructor(name) {
    this.name = name;
    this.quality = ['good', 'bad'];
    this.fruitQuality = this.quality[Math.floor(Math.random() * 2)];
  }
}

// release 0

class MangoTree extends FruitTree {
  // Produce some mangoes
  constructor(name) {
    super(name);
    this._maxAge = 10;
    this._heightGrow = Math.floor(Math.random() * 5);
  }
  produceMangoes() {
    if (this.healthyStatus === true) {
      var random = Math.floor(Math.random() * 10) + 1;
      for (var i = 0; i < random; i++) {
        let mango = new Mango();
        if (mango.fruitQuality === 'bad') {
          this._fruits.bad += 1;
        } else {
          this._fruits.good += 1;
        }
      }
    }
  }
}

class Mango extends Fruit {
  // Produce a mango
}

console.log("Mango Tree");
//driver code untuk release 0
let mangoTree = new MangoTree("Mango")
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`${mangoTree.treeName}[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested} (${mangoTree._fruits.good} good, ${mangoTree._fruits.bad} bad)`)
} while (mangoTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');

// Release 1
class AppleTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(name) {
    super(name);
    this._maxAge = 15;
    this._heightGrow = Math.floor(Math.random() * 5);
  }
  // Produce some mangoes
  produceApples() {
    if (this.healthyStatus === true) {
      var random = Math.floor(Math.random() * 10) + 1;
      for (var i = 0; i < random; i++) {
        let apple = new Apple();
        if (apple.appleQuality === 'bad') {
          this._fruits.bad += 1;
        } else {
          this._fruits.good += 1;
        }
      }
    }
  }
}

class Apple extends Fruit {

}

class PearTree extends FruitTree {
  constructor(name) {
    super(name);
    this._maxAge = 5;
    this._heightGrow = Math.floor(Math.random() * 5);
  }
  // Produce some mangoes
  producePears() {
    if (this.healthyStatus === true) {
      var random = Math.floor(Math.random() * 10) + 1;
      for (var i = 0; i < random; i++) {
        let pear = new Pear();
        if (pear.fruitQuality === 'bad') {
          this._fruits.bad += 1;
        } else {
          this._fruits.good += 1;
        }
      }
    }
  }
}

class Pear extends Fruit {

}

console.log("Apple Tree");
let appleTree = new AppleTree("Apple")
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`${appleTree.treeName} [Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested} (${appleTree._fruits.good} good, ${appleTree._fruits.bad} bad)`)
} while (appleTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');
console.log("Pear Tree");
let pearTree = new PearTree("Pear")
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`${pearTree.treeName} [Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree._harvested} (${pearTree._fruits.good} good, ${pearTree._fruits.bad} bad)`)
} while (pearTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');

// Release 3
class TreeGrove {
  constructor() {
    this.arrTree = [];
  }
  inputTree(tree) {
    this.arrTree.push(tree);
  }
  show_ages() {
    var age = [];
    for (var i = 0; i < this.arrTree.length; i++) {
      age.push(this.arrTree[0]._age);
    }
  }
  show_trees() {

  }
  mature_trees() {

  }
  dead_trees() {

  }
}
