"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    //umur, tinggi, kapasitas, grup, done, health
    this._age = 0
    this._heigth = Math.floor((Math.random()*500)+150)
    this.fruitsCap = 0
    this._harvested = []
    this.fruitDone = 0 
    this.fruitHealth = true
  }

  getAge() {
    return this.age
  }
  getHeight(age) {

    if(age===15){
      return 
    }
    return this.heigth
  }
  getFruits() {
    return this.fruitGroup
  }
  getHealtyStatus() {
    return this.fruitHealth
  }


  // Get current states here

  // Grow the tree
  grow() {
    let limitAge = 15
    let endAge = 20
    this._age+= 1
    if(this._age<15){
      this._heigth+=Math.floor((Math.random()*60)+20)
    }else
      if(this._age===20){
        this.healthyStatus=false
      }

    return this
  }

  // Produce some mangoes
  produceMangoes() {

    let fruitsSum = Math.floor((Math.random()*15)+1)

    this.fruitsCap = fruitsSum
    return this
  }

  // Get some fruits
  harvest() {
    let temp = Math.floor((Math.random()*this.fruitsCap)+1)

    let temp1=[]
    temp1[0]=this.fruitsCap-temp;
    temp1[1]=temp

    this.fruitGroup=temp1
    
    return this
  }

}

class Mango {
  // Produce a mango
  constructor(kualitas) {
    this.quality = kualitas
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
class AppleTree {
    // Initialize a new AppleTree
  constructor() {
    //umur, tinggi, kapasitas, grup, done, health
    this._age = 0
    this._heigth = Math.floor((Math.random()*500)+150)
    this.fruitsCap = 0
    this._harvested = []
    this.fruitDone = 5000 
    this.fruitHealth = true
  }

  getAge() {
    return this.age
  }
  getHeight(age) {

    if(age===15){
      return 
    }
    return this.heigth
  }
  getFruits() {
    return this.fruitGroup
  }
  getHealtyStatus() {
    return this.fruitHealth
  }


  // Get current states here

  // Grow the tree
  grow() {
    
    this._age+= 1
    if(this._age<10){
      this._heigth+=Math.floor((Math.random()*60)+20)
    }else
      if(this._age===15){
        this.healthyStatus=false
      }

    return this
  }

  // Produce some apple
  produceMangoes() {

    let fruitsSum = Math.floor((Math.random()*15)+1)

    this.fruitsCap = fruitsSum
    return this
  }

  // Get some fruits
  harvest() {
    let temp = Math.floor((Math.random()*this.fruitsCap)+1)

    let temp1=[]
    temp1[0]=this.fruitsCap-temp;
    temp1[1]=temp

    this.fruitGroup=temp1
    
    return this
  }
}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

let tree = new MangoTree()
console.log('The tree is alive! :)))))')
let a=0
while(tree.healthyStatus != false){
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log('[Year ' +tree._age+' Report] Height = '+tree._heigth+' | Fruits harvested = '+tree.fruitsCap+'('+tree.fruitGroup[1]+' good, '+tree.fruitGroup[0]+' bad)')
  a++
}

console.log('The tree has met its end :((((((((((')

let tree1 = new AppleTree()
console.log('The tree is alive! :)))))')
while(tree1.healthyStatus != false){
  tree1.grow()
  tree1.produceMangoes()
  tree1.harvest()
  console.log('[Year ' +tree1._age+' Report] Height = '+tree1._heigth+' | Fruits harvested = '+tree1.fruitsCap+'('+tree1.fruitGroup[1]+' good, '+tree1.fruitGroup[0]+' bad)')
}

console.log('The tree has met its end :((((((((((')