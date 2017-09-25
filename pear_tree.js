const FruitTree = require('./fruit_tree');

class PearTree extends FruitTree {
  constructor() {
    super();
  }
  getHeight() {
    this._height += Math.floor(Math.random() * 20) / 10;
  }

  getFruits() {
    this.jumlah = Math.floor(Math.random() * 5) + 1;
  }

  getStatus() {
    if (this._age > 35) {
      this.status = false;
    }
  }
}
class Pear {


}


let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height.toFixed(2)}m | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree.status != false)
