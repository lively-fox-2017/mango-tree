"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._maxAge = 20;
    this._height = 0;
    this._maxFruits = 50;
    this._fruits = [];
    this._harvested = 0;
    this._isHealthStatus = true;
    this._bad = 0;
    this._good = 0;

  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._fruits;
  }

  getHealtyStatus() {
    return this._isHealthStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;

    if(this._height < 10){
      let addHeight = Math.random()*1;
      // let addHeight = addHeightRandom.toFixed(2);
      this._height += addHeight;
    }

    if(this._age >= this._maxAge){
      this._isHealthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let produce = Math.floor(Math.random()* this._maxFruits);

    for(let i = 0; i < produce; i++){
      this._fruits.push(new Mango())

    }
  }

  // Get some fruits
  harvest() {
    this._harvested += this._fruits.length
    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i].quality === 'good'){
        this._good ++;
      } else {
        // console.log(this._fruits[i]);
        this._bad ++;
      }
    }

  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.randomQuality();
  }

  randomQuality(){
      let buah = Math.floor(Math.random()*2);
      // console.log(buah);
      if(buah === 0){
        return 'good'
      } else {
        return 'bad'
      }
    //return string good/bad
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

let mangoTree = new MangoTree();
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} m | Fruits harvested = ${mangoTree._harvested} : (${mangoTree._good} good, ${mangoTree._bad} bad)`)
} while (mangoTree._isHealthStatus != false)
console.log('The tree has met its end');


// Release 1
/*
Mendefinisikan class AppleTree dan class Apple.
Kedua class tsb memiliki ciri yang mirip dengan kelas MangoTree
Dan kedua class baru tadi juga mendapatkan method yang sama
meskipun beberapa method dapat berbeda:
misal apel memiliki diameter lebih kecil dsb
*/

class AppleTree {

    // Initialize a new AppleTree
    constructor() {
      this._age = 0;
      this._maxAge = 15;
      this._height = 0;
      this._maxFruits = 40;
      this._fruits = [];
      this._harvested = 0;
      this._isHealthStatus = true;
      this._bad = 0;
      this._good = 0;

    }

    getAge() {
      return this._age;
    }

    getHeight() {
      return this._height;
    }

    getFruits() {
      return this._fruits;
    }

    getHealtyStatus() {
      return this._isHealthStatus;
    }


    // Get current states here

    // Grow the tree
    grow() {
      this._age++;

      if(this._height < 5){
        let addHeight = Math.random()*1;
        // let addHeight = addHeightRandom.toFixed(2);
        this._height += addHeight;
      }

      if(this._age >= this._maxAge){
        this._isHealthStatus = false;
      }
    }

    // Produce some Apples
    produceApples() {
      let produce = Math.floor(Math.random()* this._maxFruits);

      for(let i = 0; i < produce; i++){
        this._fruits.push(new Mango())

      }
    }

    // Get some fruits
    harvest() {
      this._harvested += this._fruits.length
      for(let i = 0; i < this._fruits.length; i++){
        if(this._fruits[i].quality === 'good'){
          this._good ++;
        } else {
          // console.log(this._fruits[i]);
          this._bad ++;
        }
      }

    }


}
class Apple {
  // Produce a Apple
  constructor() {
    this.quality = this.randomQuality();
  }

  randomQuality(){
      let buah = Math.floor(Math.random()*2);
      // console.log(buah);
      if(buah === 0){
        return 'good'
      } else {
        return 'bad'
      }
    //return string good/bad
  }
}

console.log('-----------------------------------------------------------------');
console.log('-----------------------------------------------------------------');
console.log('Release 2');
let appleTree = new AppleTree();
  do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
    console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(2)} m | Fruits harvested = ${appleTree._harvested} : (${appleTree._good} good, ${appleTree._bad} bad)`)
} while (appleTree._isHealthStatus != false)
console.log('The tree has met its end');


// Release 2
/*
Sekarang kita
*/

class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
