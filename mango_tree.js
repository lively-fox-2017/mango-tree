"use strict"

const { FruitTree } = require('./fruit_tree.js')

class MangoTree extends FruitTree{

  getHeight() {
    let randomHeight = Math.ceil(Math.random() * 10)/10
    if(this._age <= 12){ // tinggi bertambah sampai umur 12 tahun
    this._height += randomHeight;
    }
  }

  getFruits() {
    if(this._age === 1){ // tahun ke-1 mulai berbuah sedikit
      let randomFruits = Math.ceil(Math.random() * 5)
      this._fruits += randomFruits;
    }else if(this._age >= 2 && this._age <= 24){ // tahun ke-2 sampai tahun ke-24 berbuah banyak
      let randomFruits = Math.ceil(Math.random() * 25)
      this._fruits = randomFruits;
    }else{ // lebih dari tahun ke-24 tidak berbuah
      this._fruits = 0
    }

  }

  getHealtyStatus() {
    if(this._age == 25){ // hidup sampai tahun ke-25
      this._healthyStatus = false;
    }
  }
}

class Mango extends MangoTree{
  // Produce a mango
  constructor() {
  }
}

let mangoTree = new MangoTree()
do {
   mangoTree.grow();
   mangoTree.produceFruit();
   mangoTree.harvest();

   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Mango Fruits harvested = ${mangoTree._fruits} ${mangoTree._harvested}`)
 } while (mangoTree._healthyStatus != false)
