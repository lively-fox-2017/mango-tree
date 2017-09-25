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

  checkLivingAge(){
    if (this.getAge() > this.maxYearFruit) {
      this._isHealthy = false;
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
  }
}

class Fruit {
  constructor(quality) {
    (quality === 0) ? this.quality = 'bad': this.quality = 'good';
  }
}

// release 0
class MangoTree extends FruitTree {
  constructor(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity) {
    super(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity);
    this.treeName = 'Mango Tree';
  }
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
  constructor(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity) {
    super(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity);
    this.treeName = 'Apple Tree';
  }
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

class PearTree extends FruitTree {
  constructor(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity) {
    super(maxHeightInc, maxYearHeight, maxYearFruit, firstFruit, maxCapacity);
    this.treeName = 'Pear Tree';
  }
  // Produce some fruits
  produceFruits() {
    let fruits = [];
    this._capacity = Math.floor(Math.random() * this.maxCapacity) + 1;
    if (this.getHealtyStatus()) {
      for (let i = 0; i < this._capacity; i++) {
        let fruit = new Pear(Math.round(Math.random()));
        fruits.push(fruit);
      }
    }
    this._fruits = fruits;
  }
}
class Pear extends Fruit {
  // Produce a mango
  constructor(quality) {
    super(quality);
    this.fruitName = 'Pear';
  }
}
// // Release 3
class TreeGrove {
  constructor() {
    this.tree = [];
  }

  inputTree(fruitTree, age) {
    let tree = null;
    switch (fruitTree) {
      case 'MangoTree':
        tree = new MangoTree(21, 14, Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 4) + 1, 20);
        break;
      case 'AppleTree':
        tree = new AppleTree(20, 10, Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 4) + 1, 23);
        break;
      case 'PearTree':
        tree = new PearTree(25, 22, Math.floor(Math.random() * 25) + 1, Math.floor(Math.random() * 4) + 1, 23);
        break;
    }
    for (let i = 0; i < age; i++) {
      tree.grow();
    }
    tree.checkLivingAge();
    this.tree.push(tree);
  }
  showAges() {
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i].treeName} Age: ${this.tree[i].getAge()}`);
    }
  }
  showTrees() {
    console.log("Tree List: ");
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i].treeName}`);
      console.log(`${this.tree[i].maxYearFruit}`);
    }
  }
  matureTrees() {
    console.log('Mature Tree List: ');
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i].getAge() >= this.tree[i].firstFruit && this.tree[i].getAge() <= this.tree[i].maxYearFruit)
        console.log(`${this.tree[i].treeName}`);
    }
  }
  deadTrees() {
    console.log('Dead Tree List: ');
    for (let i = 0; i < this.tree.length; i++) {
      if (!this.tree[i].getHealtyStatus())
        console.log(`${this.tree[i].treeName}`);
    }
  }
}

// driver code untuk release 0
let appleTree = new AppleTree(20, 10, 20, 2, 23);
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  appleTree.checkLivingAge();
  console.log(`[Year ${appleTree.getAge()} Report] Height = ${appleTree.getHeight()} | ${appleTree._fruits[0].fruitName} harvested = ${appleTree.getHarvested()}`)
} while (appleTree.getHealtyStatus() != false)
let mangoTree = new MangoTree(21, 14, 15, 3, 20);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  mangoTree.checkLivingAge();
  console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight()} | ${mangoTree._fruits[0].fruitName} harvested = ${mangoTree.getHarvested()}`)
} while (mangoTree.getHealtyStatus() != false)
let pearTree = new PearTree(25, 22, 10, 4, 23);
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  pearTree.checkLivingAge();
  console.log(`[Year ${pearTree.getAge()} Report] Height = ${pearTree.getHeight()} | ${pearTree._fruits[0].fruitName} harvested = ${pearTree.getHarvested()}`)
} while (pearTree.getHealtyStatus() != false)
// Driver Release 3
let groove = new TreeGrove();
groove.inputTree('MangoTree', Math.floor(Math.random() * 25) + 1)
groove.inputTree('MangoTree', Math.floor(Math.random() * 25) + 1)
groove.inputTree('AppleTree', Math.floor(Math.random() * 25) + 1)
groove.inputTree('PearTree', Math.floor(Math.random() * 25) + 1)
groove.showAges();
groove.showTrees();
groove.matureTrees();
groove.deadTrees();
