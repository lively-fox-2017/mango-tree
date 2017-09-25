"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, maxFruits, health, stopGrow, maxAge) {
    this._age = age;
    this._height = height;
    this._maxFruits = maxFruits;
    this._health = health;
    this._stopGrow = stopGrow;
    this._maxAge = maxAge;
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
    this._fruits = Math.floor((Math.random() * this._maxFruits) + 1);
    if (this._age <= this._stopGrow) {
      let num = Math.round(Math.random() * 20) / 100
      this._height += num
    }
    if (this._age === this._maxAge) {
      this._health = false;
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    for (var i = 0; i < this._fruits; i++) {
      let obj = new Mango()
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

class Mango {
  // Produce a mango
  constructor() {
    this._arrQuality = ['good', 'bad']
    this._quality = this.fruitQuality()
  }

  fruitQuality(){
    return this._arrQuality[Math.floor(Math.random() * 2)]
  }
}


  // driver code untuk release 0
// let apple = new AppleTree(0, 0, 30, true, 18, 25)
//   do {
//     apple.grow();
//     apple.produceMangoes();
//     apple.harvest();
//     console.log(`[Year ${apple._age} Report] Height = ${apple._height} m | Fruits harvested = ${apple._harvested}`)
//   } while (apple._health != false)
  

// Release 1
class AppleTree extends MangoTree{
  constructor(age, height, maxFruits, health, stopGrow, maxAge){
    super(age, height, maxFruits, health, stopGrow, maxAge)
  }
}
class Apple {}

let apple = new AppleTree(0, 0, 30, true, 18, 25)
do {
  apple.grow();
  apple.produceMangoes();
  apple.harvest();
  console.log(`[Year ${apple._age} Report] Height = ${apple._height} m | Fruits harvested = ${apple._harvested}`)
} while (apple._health != false)

// Release 2
class FruitTree {}
class Fruit {}

class PearTree {}
class Pear {}

// Release 3
class TreeGrove {}
