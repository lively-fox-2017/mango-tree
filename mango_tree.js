"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._umur = 0;
    this._tinggi = 0;
    this._kapasitas_max_buah = 0;
    this.healthyStatus = true;
    this._harvested = 0;
    this.panen = new Mango();
  }

  getAge() {
    this._umur;
  }
  getHeight() {
    this.tinggi;
  }
  getFruits() {
    this._fruits = this._harvested;
  }
  getHealtyStatus() {
    this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._umur += 0.5;
    if (this._umur <= 5) {
      this._tinggi += 50;
      // this.harvest()=this.panen;
    } else
    if (this._umur < 10) {
      this._tinggi += 30;
      this.harvest();
    } else
    if (this._umur < 21) {
      this.produceMangoes();
      this.harvest();
    } else {
      this.healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (var umurAwal = 0; umurAwal < this._umur; umurAwal++) {
      this._tinggi += Math.random();
    }
  }

  // Get some fruits
  harvest() {
    // this.grow();
    // console.log(this._harvested);
    this._harvested = Math.floor((Math.random() * 10) + 2);
    this._good = Math.floor(this._harvested * Math.random()) + 1;
    this._bad = this._harvested - this._good;
    return `${this._harvested} (${this._good} good, ${this._bad} bad`;

  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._good = 0;
    this._bad = 0;
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
// console.log(mangoTree.healthyStatus)
// console.log( mangoTree.grow());
// console.log( mangoTree.harvest());
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._umur} Report] Height = ${mangoTree._tinggi.toFixed(2)} cm | Fruits harvested = ${mangoTree.harvest()}`)
} while (mangoTree.healthyStatus != false)


// console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(2)} | Fruits harvested = ${tree.harvest()}`) // (${tree._good} good, ${tree._bad} bad`);
// console.log(tree.grow());
// console.log(tree.grow());
// console.log(tree.grow());
// console.log(tree.grow());
// console.log(tree.grow());
// console.log(tree.grow());
// Release 1
class AppleTree {

}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}