"use strict"
const FruitTree = require('./fruit_tree');

class MangoTree extends FruitTree {
  
  // Produce some mangoes
}

class Mango {
  constructor(){
    this.quality = quality;
  }

}

// /**
//   * driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.status != false)





