"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._harvested = 0
    this._healthyStatus = true
    this._stopGrowing = 23
    this._maxAge = 25
    this._fruits = []
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._harvested
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if (this._age <= this._stopGrowing) {
      let random = Math.floor(Math.random()*2,5)
      this._height += random
    }
    if (this._age == this._maxAge) {
      this._healthyStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random()* this._age)
    for (var i = 0; i < random; i++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') {
        good++
      }else {
        bad++
      }
    }
    this._harvested = this._fruits.length +' (good '+good+' bad '+bad +')'
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = this.randomBuah()
  }
  randomBuah(){
    this._isQuality = ['good','bad']
    this._quality = this._isQuality[Math.floor(Math.random()*this._isQuality.length)]
    return this._quality
  }
}

 // driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`)
   } while (mangoTree._healthyStatus != false)


// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {}

// Release 3
// class TreeGrove {}
