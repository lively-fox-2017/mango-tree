"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this.maxFruits = 0
    this._fruits = []
    this.gfruits = 0
    this._healthyStatus = true
    this._harvested = 0
  }

  getAge() {
    return this._age
  }

  getHeight() {
    let ranHei = Math.random(this.height)
    return ranHei
  }

  getFruits() {
    
  }

  getHealtyStatus() {

  }


  // Get current states here

  // Grow the tree
  grow() {
    // this._age += Math.random(this._age)
    this._age++

    if(this._age < 10){
      let addHeight = Math.random() * 2
      this._height += addHeight
    }

    if(this._age >= 20){
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random() * 5)
    for(let i = 0; i < random; i++){
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i]._quality === 'good'){
        good += 1
      }else{
        bad += 1
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = this.randomQuality()
  }

  randomQuality(){
    let arr = ['good', 'bad']
    let random = Math.floor(Math.random() * arr.length)
    
    if(random == 0){
      return 'good'
    }else{
      return 'bad'
    }
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
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

// let mantree = new MangoTree()
// console.log(mantree.getAge())