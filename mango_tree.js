'use strict'

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, health) {
    this._name = 'MangoTree';
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 15);
    this._fruits = fruits;
    this._produce = 0;
    this._health = true;
    this._mature = false;
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

class Mango extends MangoTree {
  // Produce a mango
  constructor() {
    super();
    this.maxAge = 10;

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


// Release 1
class AppleTree {
  constructor(age, height, fruits, health) {
    this._name = 'AppleTree';
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 15);
    this._fruits = fruits;
    this._produce = 0;
    this._health = true;
    this._mature = false;
    this._addHeight = Math.floor((Math.random() * (5 - 1)) + 10) / 10;
    this.mature = 3;
    this.maxAge = 20;
    this.maxGrow = 15;
    this.maxHeight = 6.5;

  }
}
class Apple extends AppleTree {
  constructor() {
    super();
    this.maxAge = 10;
  }
}

class PearTree {
  constructor(age, height, fruits, health) {
    this._name = 'PearTree';
    this._age = age;
    this._height = height;
    this._maxFruit = Math.ceil(Math.random() * 15);
    this._fruits = fruits;
    this._produce = 0;
    this._health = true;
    this._mature = false;
    this._addHeight = Math.floor((Math.random() * (5 - 1)) + 10) / 10;
    this.mature = 3;
    this.maxAge = 20;
    this.maxGrow = 15;
    this.maxHeight = 6.5;

  }
}
class Pear extends PearTree {
  constructor() {
    super();
    this.maxAge = 10;
  }
}

// Release 2
class FruitTree {
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
}

class Fruit extends FruitTree {
  constructor() {
    super();
    this.maxAge = 10;
  }
}

// Release 3
class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(tree, age, height, fruits, health) {
    if (tree === 'AppleTree') {
      let pohon = new AppleTree(age, height, fruits, health);
      this._trees.push(pohon);
    } else if (tree === 'PearTree') {
      let pohon = new PearTree(age, height, fruits, health);
      this._trees.push(pohon);
    } else if (tree === 'MangoTree') {
      let pohon = new MangoTree(age, height, fruits, health);
      this._trees.push(pohon);
    } else {
      console.log('tree not defined yet');
    }
  }

  show_ages() {
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i]._name + ' sudah berumur ' + this._trees[i]._age);
    }
  }

  show_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i]);
    }
  }

  mature_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      if (this._trees[i]._age >= this._trees[i].mature) {
        console.log(this._trees[i]._name + ' sudah bisa berbuah');
      }
    }
  }

  dead_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      if (this._trees[i]._health === false)
        console.log(this._trees[i]._name + ' sudah mati');
    }
  }
}

let grove = new TreeGrove();
grove.inputTree('MangoTree', 3, 4.5, 5, true);
grove.inputTree('PearTree', 7, 4.2, 15, true);
grove.inputTree('AppleTree', 4, 6.8, 10, true);

grove.show_ages();
grove.show_trees();
grove.mature_trees();
grove.dead_trees();

// let mangga = new MangoTree(1, 1.3, 5, true);
// mangga.grow()
//
// console.log(mangga.getAge());
// console.log(mangga.getHeight());
// console.log(mangga.getFruits());
// console.log(mangga.getHealtyStatus());
// console.log(mangga.produceMangoes());
// console.log(mangga.harvest());
