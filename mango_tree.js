"use strict"

// release 0

class MangoTree{
  // Initialize a new MangoTree
  constructor() {
    this._age=0
    this._height=0
    this._fruits=0
    this._healtyStatus=true
    this._stopGrowing=20
    this._maxAge=20
    this._maxHeight=20
    this._harvested=0
    this._fruits=[]
  }

  get Age() {
    return this._age

  }
  get Height() {
    return this._height
  }

  get Fruits() {
    return this._fruits
  }
  get HealtyStatus() {
    return this._healtyStatus
  }
  get Harvested(){
    return this._fruits
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age ++
    if(this._age <= this._stopGrowing){
      var tinggi = Math.random()*(5.3-0)+0;
    // console.log(tinggi);
      this._height += tinggi
    }
    if(this._age==this._maxAge){
      this._healtyStatus=false
    }
  }

  // Produce some mangoes
  produceMango() {
    let random=Math.floor(Math.random()*3)
    // console.log(buah)
    for (let i=0;i<random;i++){
      this._fruits.push(new Mango())
    }
  }
  // Get some fruits
  harvest() {
    let goodFruit=0
    let badFruit=0

    for (var i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i]._quality ==='good'){
        goodFruit++
      }else{
        badFruit++
      }
    }
    this._harvested=`${this._fruits.length}(${goodFruit} good,${badFruit} bad)`
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this._quality=this.randomQuality()
  }

  randomQuality() {//ini d random bad ama good
    let kualitas=['good','bad']
    let acak= Math.floor(Math.random()*kualitas.length)

    if(acak==0){
      return 'good'
    }else{
      return 'bad'
    }
    //bikin random untuk buah good/bad
    //klao bad assign value ke attributenya, return this._quality
    //good pun sama
  }
}
  //  driver code untuk release 0
   let tree = new MangoTree()
   do {
     tree.grow();
    tree.produceMango();
     tree.harvest();
    // console.log('-------------------------')
     console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvested}`)
   } while (tree._healtyStatus != false)


// // Release 1
// class AppleTree {}
// class Apple {
//   contructor(fruits){
//     this._fruits=fruits
//   }
// }
// let mangoes=[
//   mangoes.push()
// ]
// // let fruitTree=new FruitTree()
// // fruitTree.createTrees()//metode refactor
// createTrees()
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}

