"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._kapasitasBuah = 20
    this._kumpulanbuah = 0
    this._harvested = 0
    this._healthyStatus = true
    this.quality = new Mango()
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._kumpulanbuah
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this._age < 20) {
      this._age++
      this._height = this._height + Math.random()
      this.produceMangoes()
      this.harvest()
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._kumpulanbuah = Math.floor(Math.random() * 20 + 1)
  }

  // Get some fruits
  harvest() {
    this._harvested = this._kumpulanbuah
    this._kumpulanbuah = 0
    this.quality.good = Math.floor(Math.random() * this._harvested + 1)
    this.quality.bad = this._harvested - this.quality.good
  }

  status() {
    if(this._age == 20) {
      this._healthyStatus = false
      return 'pohon tetangga telah tiada'
    }
    else {
      return ''
    }
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.good = 0
    this.bad = 0
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
//class AppleTree {}
//class Apple {}

// Release 2
//class FruitTree {}
//class Fruit {}

// Release 3
//class TreeGrove {}

var mangoTree = new MangoTree()

do {
   mangoTree.grow();
   //mangoTree.produceMangoes();
   //mangoTree.harvest();
   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | Fruits harvested = ${mangoTree._harvested} (${mangoTree.quality.good} good, ${mangoTree.quality.bad} bad)`)
   console.log(mangoTree.status())
 } while (mangoTree._healthyStatus != false)



class AppleTree extends MangoTree {
  constructor() {
    super()
    this.quality = new Apple()
  }
}

console.log('================================================================');

class Apple extends Mango {
  constructor() {
    super()
  }
}

var apelmalam = new AppleTree()

do {
   apelmalam.grow();
   //mangoTree.produceMangoes();
   //mangoTree.harvest();
   console.log(`[Year ${apelmalam._age} Report] Height = ${apelmalam._height.toFixed(2)} | Fruits harvested = ${apelmalam._harvested} (${apelmalam.quality.good} good, ${apelmalam.quality.bad} bad)`)
   console.log(apelmalam.status())
 } while (apelmalam._healthyStatus != false)
