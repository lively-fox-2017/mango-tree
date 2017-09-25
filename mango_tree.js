"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age,height,max_fruits,fruits,fruits_harvested,health) {
    this.age = age;
    this.height = height;
    this.max_fruits = max_fruits;
    this.fruits = fruits;
    this.fruits_harvested = fruits_harvested;
    this.health = health;
  }
  getAge() {
     return this.age = 0;
  }
  getHeight() {
    return this.height = 0;
  }
  getFruits() {
    this.max_fruits = 50;
    this.fruits = Math.floor(Math.random()*this.max_fruits+1);
  }
  getHealtyStatus() {
    return this.health = true;
  }
  // Get current states here
  // Grow the tree
  grow() {
    this.age++;
    this.height++;
    if(this.age === 20){
      return this.health = false;
    }
  }
  // Produce some mangoes
  produceMangoes() {
    if(this.fruits <= this.max_fruits){
      return this.fruits = Math.floor(Math.random()*this.fruits+10);
    }
  }
  // Get some fruits
  harvest() {
    this.fruits--;
    let good_fruits = Math.floor(Math.random()*this.fruits+1);
    let bad_fruits = this.fruits - good_fruits;
    return this.fruits_harvested = ` ${this.fruits} (Good Fruits: ${good_fruits}, Bad Fruits: ${bad_fruits})`;
  }
}
class Mango {
  // Produce a mango
  constructor(fruits_diameters,fruits_weight,fruits_color){
    this.fruits_diameters = fruits_diameters;
    this.fruits_weight = fruits_weight;
    this.fruits_color = fruits_color;
  }
}
// driver code untuk release 0
let mangoTree = new MangoTree()
mangoTree.getAge();
mangoTree.getHeight();
mangoTree.getFruits();
mangoTree.getHealtyStatus();
console.log("Mango Tree Log");
do {
mangoTree.grow();
mangoTree.produceMangoes();
mangoTree.harvest();
console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} Meters | Fruits harvested = ${mangoTree.fruits_harvested}`)
} while (mangoTree.health != false)

// Release 1
class AppleTree {
  constructor(age,height,max_fruits,fruits,fruits_harvested,health) {
    this.age = age;
    this.height = height;
    this.max_fruits = max_fruits;
    this.fruits = fruits;
    this.fruits_harvested = fruits_harvested;
    this.health = health;
  }
  getAge(){

  }
  getHeight(){

  }
  getFruits(){

  }
  getHealtyStatus(){

  }
}
class Apple {
  constructor(fruits_diameters,fruits_weight,fruits_color){
    this.fruits_diameters = fruits_diameters;
    this.fruits_weight = fruits_weight;
    this.fruits_color = fruits_color;
  }
  getFruitsDiameters(){

  }
  getFruitsWeight(){

  }
  getFruitsColor(){

  }
}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

