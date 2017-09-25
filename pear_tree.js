"use strict"

const { FruitTree } = require('./fruit_tree.js')

class PearTree extends FruitTree{

  getHeight() {
    let randomHeight = Math.ceil(Math.random() * 10)/10
    if(this._age <= 9){ // tinggi bertambah sampai umur 9 tahun
    this._height += randomHeight;
    }
  }

  getFruits() {
    if(this._age >= 2 && this._age <= 3){ // tahun ke-2 - ke-3 mulai berbuah sedikit (tahun ke-1 tidak berbuah)
      let randomFruits = Math.ceil(Math.random() * 5)
      this._fruits += randomFruits;
    }else if(this._age >= 4 && this._age <= 14){ // tahun ke-4 sampai tahun ke-14 berbuah banyak
      let randomFruits = Math.ceil(Math.random() * 25)
      this._fruits = randomFruits;
    }else{ // lebih dari tahun ke-14 tidak berbuah
      this._fruits = 0
    }

  }

  getHealtyStatus() {
    if(this._age == 16){ // hidup sampai tahun ke-16
      this._healthyStatus = false;
    }
  }
}

class Pear extends PearTree{
  // Produce a Pear
  constructor() {
  }
}

let pearTree = new PearTree()
do {
   pearTree.grow();
   pearTree.produceFruit();
   pearTree.harvest();

   console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Pear Fruits harvested = ${pearTree._fruits} ${pearTree._harvested}`)
 } while (pearTree._healthyStatus != false)
