"use strict"

// release 2 bikin pohon utama

class FruitTree {

  // Initialize a new FruitTree
  constructor(name, age, height, firstTimeGrow, health) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._firstTimeGrow = firstTimeGrow;
    this._health = health;
    this._maxAge = 20;
    this._maxFruits = 100;
    this._fruits = 0;
    this._typeFruits = [];
    this._harvested = ''
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._fruits
  }
  getHealtyStatus() {
    return this._health
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    let num = Math.round(Math.random() * 20) / 100
    this._height += num
    // this._fruits = Math.floor((Math.random() * this._maxFruits) + 1);
    if (this._age >= this._firstTimeGrow) {
      this._fruits = Math.floor((Math.random() * this._maxFruits) + 1);
    }
    if (this._age === this._maxAge) {
      this._health = false;
    }
    return this
  }

  // Produce some fruits
  produceFruits() {
    for (var i = 0; i < this._fruits; i++) {
      let obj = new Fruits()
      this._typeFruits.push(obj);
    }
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;
    for (var i = 0; i < this._typeFruits.length; i++) {
      if (this._typeFruits[i]._quality == 'good') {
        good++
      } else {
        bad++
      }
    }
    this._harvested = this._typeFruits.length + ' (' + good + ' good, ' + bad + ' bad )'
    this._typeFruits = []
  }


}

class Fruits {
  // Produce a fruit
  constructor() {
    this._arrQuality = ['good', 'bad']
    this._quality = this.fruitQuality()
  }

  fruitQuality() {
    return this._arrQuality[Math.floor(Math.random() * 2)]
  }
}

// release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor(name, age, height, firstTimeGrow, health) {
    super(name, age, height, firstTimeGrow, health)
    this._maxAge = 20;
    this._maxFruits = 30;
  }

}

class Mango extends Fruits{
  // Produce a mango
  constructor() {
    super()
  }
}


// Release 1
class AppleTree extends FruitTree{
  constructor(name, age, height, firstTimeGrow, health) {
    super(name, age, height, firstTimeGrow, health)
    this._maxAge = 15;
    this._maxFruits = 80;
  }
}
class Apple extends Fruits{
  constructor() {
    super()
  }
}

// Release 2

class PearTree extends FruitTree {
  constructor(name, age, height, firstTimeGrow, health) {
    super(name, age, height, firstTimeGrow, health)
    this._maxAge = 18;
    this._maxFruits = 90;
  }
}
class Pear extends Fruits{ 
  constructor() {
    super()
  }
}

// let apple = new AppleTree('Apple', 2, 1.0, 10, true)
// console.log('==================APPLE TREE=================')
// do {
//   apple.grow();
//   apple.produceFruits();
//   apple.harvest();
//   console.log(`[Year ${apple._age} Report] Height = ${apple._height} m | Fruits harvested = ${apple._harvested}`)
// } while (apple._health != false)

// console.log('==================MANGO TREE=================')
// let mango = new MangoTree('Mango', 3, 0.1, 15, true)
// do {
//   mango.grow();
//   mango.produceFruits();
//   mango.harvest();
//   console.log(`[Year ${mango._age} Report] Height = ${mango._height} m | Fruits harvested = ${mango._harvested}`)
// } while (mango._health != false)

// Release 3
class TreeGrove {
  constructor(){
    this._arrTree = []
    this._pohonMati = []
  }

  inputTree(treeName, age, height, maxFruits, health) {
    if (treeName === 'MangoTree'){
      let mango = new MangoTree(treeName, age, height, maxFruits, health)
      this._arrTree.push(mango)
      return this
    } else if (treeName === 'AppleTree'){
      let apple = new AppleTree(treeName, age, height, maxFruits, health)
      this._arrTree.push(apple)
      return this
    } else if (treeName === 'PearTree'){
      let pear = new PearTree(treeName, age, height, maxFruits, health)
      this._arrTree.push(pear)
      return this
    }
  }

  nextYear(){
    for (let i = 0; i < this._arrTree.length; i++){
      this._arrTree[i]._age++
      this._arrTree[i]._fruits = Math.floor((Math.random() * this._arrTree[i]._maxFruits) + 1);
      if (this._arrTree[i]._age <= this._arrTree[i]._stopGrow) {
        let num = Math.round(Math.random() * 20) / 100
        this._arrTree[i]._height += num
      }
      if (this._arrTree[i]._age === this._arrTree[i]._maxAge) {
        this._arrTree[i]._health = false;
      } 
    }
    return this
  }

  showAge(){
    let umur = []
    for(let i =0; i < this._arrTree.length; i++) {

      umur.push(`Umur pohon ${this._arrTree[i]._name} : ${this._arrTree[i]._age}`)
    }
    return umur
  }

  showTrees(){
    let pohon = []
    for (let i =0; i < this._arrTree.length; i++){
      pohon.push(this._arrTree[i]._name)
    }
    return pohon
  }

  matureTree(){
    let pohon=[]
    for (let i = 0; i < this._arrTree.length; i++){
      if(this._arrTree[i]._health === true){
        pohon.push(`Pohon yang masih hidup ${this._arrTree[i]._name}`)
      }
    }
    return pohon
  }

  deadTree(){
    let pohon = []
    for(let i = 0; i < this._arrTree.length; i++){
      if(this._arrTree[i]._health === false){
        pohon.push(`Pohon yang sudah mati ${this._arrTree[i]._name}`)
      }
    }
    return pohon
  }

}

let kebun = new TreeGrove()
kebun.inputTree('MangoTree', 10, 0.8, 3, true)
kebun.inputTree('AppleTree', 10, 0.5, 5, true)
kebun.inputTree('PearTree', 10, 0.5, 7, true)


console.log(kebun._arrTree)
console.log('========================================')
kebun.nextYear()
console.log(kebun.showAge())
console.log(kebun.showTrees())
console.log(kebun.matureTree())
console.log(kebun.deadTree())
console.log('========================================')
kebun.nextYear()
console.log(kebun.showAge())
console.log(kebun.showTrees())
console.log(kebun.matureTree())
console.log(kebun.deadTree())
console.log('========================================')
kebun.nextYear()
console.log(kebun.showAge())
console.log(kebun.showTrees())
console.log(kebun.matureTree())
console.log(kebun.deadTree())
console.log('========================================')
kebun.nextYear()
console.log(kebun.showAge())
console.log(kebun.showTrees())
console.log(kebun.matureTree())
console.log(kebun.deadTree())
console.log('========================================')
kebun.nextYear()
console.log(kebun.showAge())
console.log(kebun.showTrees())
console.log(kebun.matureTree())
console.log(kebun.deadTree())

