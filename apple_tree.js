"use strict"

const { FruitTree } = require('./fruit_tree.js')

class AppleTree extends FruitTree{

  getHeight() {
    let randomHeight = Math.ceil(Math.random() * 10)/10
    if(this._age <= 10){ // tinggi bertambah sampai umur 10 tahun
    this._height += randomHeight;
    }
  }

  getFruits() {
    if(this._age === 3){ // tahun ke-3 mulai berbuah sedikit (tahun ke-1 & 2 tidak berbuah)
      let randomFruits = Math.ceil(Math.random() * 5)
      this._fruits += randomFruits;
    }else if(this._age >= 4 && this._age <= 14){ // tahun ke-4 sampai tahun ke-19 berbuah banyak
      let randomFruits = Math.ceil(Math.random() * 25)
      this._fruits = randomFruits;
    }else{ // lebih dari tahun ke-19 tidak berbuah
      this._fruits = 0
    }

  }

  getHealtyStatus() {
    if(this._age == 15){ // hidup sampai tahun ke-15
      this._healthyStatus = false;
    }
  }
}

class Apple extends AppleTree{
  // Produce a Apple
  constructor() {
  }
}

let appleTree = new AppleTree()
do {
   appleTree.grow();
   appleTree.produceFruit();
   appleTree.harvest();

   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Apple Fruits harvested = ${appleTree._fruits} ${appleTree._harvested}`)
 } while (appleTree._healthyStatus != false)
