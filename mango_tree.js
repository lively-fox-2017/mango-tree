"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._maxFruit = 0;
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
    if (this._age < 11) {
      this._height = this._height + Math.floor(Math.random() * 3);
    } else {
      this.healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.healthyStatus === true) {
      var random = Math.floor(Math.random() * 10) + 1;
      for (var i = 0; i < random; i++) {
        let mango = new Mango();
        if (mango.mangoQuality === 'bad') {
          this._fruits.bad += 1;
        } else {
          this._fruits.good += 1;
        }
      }
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

class Mango {
  // Produce a mango
  constructor() {
    this.quality = ['good', 'bad'];
    this.mangoQuality = this.quality[Math.floor(Math.random() * 2)];
  }
}

console.log("Mango Tree");
//driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested} (${mangoTree._fruits.good} good, ${mangoTree._fruits.bad} bad)`)
} while (mangoTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');

// Release 1
class AppleTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._maxFruit = 0;
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
    if (this._age < 16) {
      this._height = this._height + Math.floor(Math.random() * 3);
    } else {
      this.healthyStatus = false;
    }
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

  // Get some fruits
  harvest() {
    this._harvested += this._fruits.bad;
    this._harvested += this._fruits.good;
    this._maxFruit += this._fruits.bad;
    this._maxFruit += this._fruits.good;
  }

}

class Apple {
  constructor() {
    this.quality = ['good', 'bad'];
    this.appleQuality = this.quality[Math.floor(Math.random() * 2)];
  }
}

class PearTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._maxFruit = 0;
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
    if (this._age < 6) {
      this._height = this._height + Math.floor(Math.random() * 3);
    } else {
      this.healthyStatus = false;
    }
  }

  // Produce some mangoes
  producePears() {
    if (this.healthyStatus === true) {
      var random = Math.floor(Math.random() * 10) + 1;
      for (var i = 0; i < random; i++) {
        let pear = new Pear();
        if (pear.pearQuality === 'bad') {
          this._fruits.bad += 1;
        } else {
          this._fruits.good += 1;
        }
      }
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

class Pear {
  constructor() {
    this.quality = ['good', 'bad'];
    this.pearQuality = this.quality[Math.floor(Math.random() * 2)];
  }
}

console.log("Apple Tree");
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested} (${appleTree._fruits.good} good, ${appleTree._fruits.bad} bad)`)
} while (appleTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');
console.log("Pear Tree");
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree._harvested} (${pearTree._fruits.good} good, ${pearTree._fruits.bad} bad)`)
} while (pearTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');


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
    this.quality = ['good', 'bad'];
    this.fruitQuality = this.quality[Math.floor(Math.random() * 2)];
  }
}

// Release 3
class TreeGrove {}
