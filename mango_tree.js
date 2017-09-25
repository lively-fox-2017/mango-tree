"use strict"

// release 0
class FruitTree {
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
  harvest() {
    this._harvested = Math.floor((Math.random() * 10) + 2);
    this._good = Math.floor(this._harvested * Math.random()) + 1;
    this._bad = this._harvested - this._good;
    return `${this._harvested} (${this._good} good, ${this._bad} bad`;

  }
  produceFruits() {
    for (var umurAwal = 0; umurAwal < this._umur; umurAwal++) {
      this._tinggi += Math.random();
    }
  }
}
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super();

  }
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
      this.produceFruits();
      this.harvest();
    } else {
      this.healthyStatus = false;
    }
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._good = 0;
    this._bad = 0;
  }
}

let mangoTree = new MangoTree();
console.log('\n\n Pertumbuhan buah Mango\n');
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._umur} Report] Height = ${mangoTree._tinggi.toFixed(2)} cm | Fruits harvested = ${mangoTree.harvest()}`)
} while (mangoTree.healthyStatus != false);

class AppleTree extends FruitTree {
  constructor() {
    super();
  }
  growApple() {
    this._umur += 0.5;
    if (this._umur <= 5) {
      this._tinggi += 50;
      // this.harvest()=this.panen;
    } else
    if (this._umur < 10) {
      this.produceFruits();
      this.harvest();
    } else {
      this.healthyStatus = false;
    }
  }

}
class Apple {}
let appleTree = new AppleTree();
console.log('\n\n Pertumbuhan buah Apple\n');
do {
  appleTree.growApple();
  appleTree.harvest();
  console.log(`[Year ${appleTree._umur} Report] Height = ${appleTree._tinggi.toFixed(2)} cm | Fruits harvested = ${appleTree.harvest()}`)
} while (appleTree.healthyStatus != false);

class PeerTree extends FruitTree {
  constructor() {
    super();
  }
  growPeer() {
    this._umur += 0.5;
    if (this._umur <= 5) {
      this._tinggi += 50;
      // this.harvest()=this.panen;
    } else
    if (this._umur < 10) {
      this.produceFruits();
      this.harvest();
    } else {
      this.healthyStatus = false;
    }
  }

}

let peerTree = new PeerTree();
console.log('\n\n Pertumbuhan buah Peer\n');
do {
  peerTree.growPeer();
  peerTree.harvest();
  console.log(`[Year ${peerTree._umur} Report] Height = ${peerTree._tinggi.toFixed(2)} cm | Fruits harvested = ${peerTree.harvest()}`)
} while (peerTree.healthyStatus != false);

class TreeGrove {}