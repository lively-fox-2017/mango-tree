const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree {
  constructor() {
    super();
  }
  getHeight() {
    this._height += Math.floor(Math.random() * 5) / 10;
  }

  getFruits() {
    this.jumlah = Math.floor(Math.random() * 15) + 1;
  }

  getStatus() {
    if (this._age > 10) {
      this.status = false;
    }

  }
}


class Apple {


}

// /**
//   * driver code untuk release 0
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(2)}m | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree.status != false)
