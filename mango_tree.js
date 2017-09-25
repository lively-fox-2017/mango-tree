"use strict"

// release 0
class FruitTree {
  constructor(name, age, height, maxCapacity, healthyStatus, rangeGrowth,maxAge, productiveAge) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.maxCapacity = maxCapacity;
    this.availableFruits = [];
    this.harvestedFruits = [];
    this.healthyStatus = true;
    this.rangeGrowth = rangeGrowth
    this.maxAge = maxAge;
    this.productiveAge= productiveAge;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.availableFruits;
  }
  getHealtyStatus() {
    return this.healthyStatus;
  }

  randomNumberGenerator(max) {
    let rng = Math.round(Math.random()*max-1)+1;
    return rng
  }
  // Get current states here

  // Grow the tree
  grow() {
    this.age += 1;
    if (this.age<20){
      this.height += this.randomNumberGenerator(this.rangeGrowth);
    }
    if (this.age>=this.maxAge){
      this.healthyStatus =  false;
    }
  }

  // Produce some mangoes
  produceFruits( fruit) {
    if (this.age>=this.productiveAge){
      let fruitAbstraction = fruit;
      let random = this.randomNumberGenerator(this.maxCapacity)
      let buah = new fruitAbstraction();
      for(let i = 0; i<random; i++){
        this.availableFruits.push(buah);
        buah = new fruitAbstraction();
      }
    }
  }

  harvested(){
    let result = ''+this.harvestedFruits.length;
    let goodCounter = 0;
    let badCounter = 0;
    for (let i =0; i<this.harvestedFruits.length; i++){
      if (this.harvestedFruits[i].quality=='good'){
        goodCounter++;
      }else{
        badCounter++;
      }
    }
    result+= ` (${goodCounter} good, ${badCounter} bad)`
    //console.log(result);
    return result;
  }

  // Get some fruits
  harvest() {
    this.harvestedFruits = this.availableFruits;
    this.availableFruits = [];
  }

}

class Fruit {
  // Produce a mango
  constructor(name) {
    this.name = name;
    this.quality = this.randomQuality();
  }

  randomQuality(){
    if(Math.round(Math.random())==1){
      return 'good'
    }return 'bad'
  }
}

class MangoTree extends FruitTree {
  constructor (umur, growthRange, maxAge){
    super('mango', umur, 0, 15, true, growthRange, maxAge ,3);
  }

  produceMangoes(){
    super.produceFruits( Mango);
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super('mango')
  }
}

class AppleTree extends FruitTree {
  constructor (umur, growthRange, maxAge){
    super('apple', umur, 0, 15, true, growthRange, maxAge ,3);
  }

  produceMangoes(){
    super.produceFruits( Apple);
  }
}

class Apple extends Fruit{
  // Produce a mango
  constructor() {
    super('apple')
  }
}

class PearTree extends FruitTree {
  constructor (umur, growthRange, maxAge){
    super('Pear', umur, 0, 15, true, growthRange, maxAge ,3);
  }

  produceMangoes(){
    super.produceFruits( Pear);
  }
}

class Pear extends Fruit{
  // Produce a mango
  constructor() {
    super('Pear')
  }
}

//driver code untuk release 0
let mangoTree = new MangoTree(0, 40, 9, true)
let tree = null;
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  tree = mangoTree;
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested()}`)
} while (mangoTree.healthyStatus != false)


class TreeGrove {
  constructor(){
    this.trees=[];
  }

  inputTree(jenisPohon, umur, growthRange, maxAge ) {
    let tree = null;
    switch (jenisPohon) {
      case 'mangoTree':
        tree = new MangoTree(umur, growthRange, maxAge);
        break;
      case 'appleTree':
        tree = new AppleTree(umur, growthRange, maxAge);
        break;
      case 'pearTree':
        tree = new PearTree(umur, growthRange, maxAge);
        break;
      default:

    }
    if (tree!=null){
      this.trees.push(tree)
    }
  }

  isDead(tree){
    return tree.getHealtyStatus()
  }

  show_ages(){
    let returnString = 'List umur pohon : \n';
    for (var i in this.trees) {
      //console.log(this.isDead(this.trees[i]));
      if(this.isDead(this.trees[i])){
        returnString += 'pohon '+this.trees[i].name+', ';
        returnString += 'umur '+this.trees[i].age;
        returnString += '\n'
      }
    }
    return returnString;
  }

  show_trees(){
    let returnString = 'Pohon yang dimiliki : \n';
    for(let i in this.trees) {
      returnString += 'pohon '+this.trees[i].name+'\n ';
    }
    return returnString;
  }

  mature_trees(){
    let returnString = 'Pohon yang bisa berbuah : \n'
    for (let i in this.trees){
      if (this.trees[i].age>= this.trees[i].productiveAge
         && this.isDead(this.trees[i]) ){
        returnString += 'pohon '+this.trees[i].name+'\n ';
      }
    }
    return returnString
  }

  dead_trees(){
    let returnString = 'Pohon yang sudah mati : \n'
    for (let i in this.trees){
      if (this.trees[i].healthyStatus== false){
        returnString += 'pohon '+this.trees[i].name+'\n ';
      }
    }
    return returnString
  }

  next_year(){
    for(let treeIndex in this.trees){
      this.trees[treeIndex].grow();
    }
  }
}

let hutan = new TreeGrove();
hutan.inputTree('mangoTree', 3, 90, 20);
hutan.inputTree('appleTree', 3, 120, 40);
hutan.inputTree('appleTree', 10, 120, 12);
console.log(hutan.show_ages());
console.log(hutan.show_trees());
console.log(hutan.mature_trees());
console.log(hutan.dead_trees());
hutan.next_year();
hutan.next_year();
hutan.next_year();
console.log(hutan.show_ages());

console.log(hutan.dead_trees());
