"use strict"

// release 0
class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this._height=0;
    this._maxHeight=15;
    this._fruit=[];
    this._healty=true;
    this._harvested=0;
    this._maxGrow=15;
    this._maxAge=20;
  }
  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruit;
  }
  getHealtyStatus() {
    return this._healty;
  }
  // Get current states here
  // Grow the tree
  grow() {
    this._age+=1;
    if(this._age<=this._maxGrow){
      let grow=Math.floor(Math.random()*(3 - 1) + 1)/2;
      if(this._height<=this._maxHeight){
        this._height+=grow;
      }
    }
    if(this._age == this._maxAge){
      this._healty=false;
    }
  }
  // Produce some mangoes
  produceMangoes() {
    let fruit=Math.floor(Math.random()*99);
    for(let i=0;i<fruit;i++){
      let quality_fruit=Math.floor(Math.random()*(9-1)+1);
      let quality='';
      // console.log(i%quality_fruit);
      if(i%quality_fruit==0){
        quality='good';
      }else{
        quality='bad';
      }
      let mango=new Mango(quality);
      this._fruit.push(mango);
    }
  }
  // Get some fruits
  harverst() {
    this._harvested=this._fruit.length;
    let good=0;
    let bad=0;
    for(let i=0;i<this._harvested;i++){
      if(this._fruit[i].quality=='good'){
        bad++;
      }else{
        good++;
      }
    }
    return {jumlah:this._harvested,bad:bad,good:good};
  }
}

class Mango{
  // Produce a mango
  constructor(quality){
    this.quality=quality;
  }
}
//   * driver code untuk release 0
console.log(`Thee tree is alive! :smile:`);
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harverst();
    console.log(`[Year ${mangoTree._age} Tahun Report] Height = ${mangoTree._height} Meter | Fruits harvested = ${mangoTree.harverst().jumlah} Buah, ${mangoTree.harverst().good} good, ${mangoTree.harverst().bad} bad`)
  } while (mangoTree._healty != false);
  console.log(`The tree has met its end. :sad:`);

// Release 1
class AppleTree {
  constructor() {
    this._age=0;
    this._height=0;
    this._maxHeight=6;
    this._fruit=[];
    this._healty=true;
    this._harvested=0;
    this._maxGrow=15;
    this._maxAge=20;
  }
  get Age() {
    return this._age;
  }
  get Height() {
    return this._height;
  }
  get Fruits() {
    return this._fruit;
  }
  get HealtyStatus() {
    return this._healty;
  }
  // Get current states here
  // Grow the tree
  grow() {
    this._age+=1;
    if(this._age<=this._maxGrow){
      let grow=Math.floor(Math.random()*(2-1)+1)/2;
      if(this._height <= this._maxHeight){
        this._height+=grow;
      }
    }
    if(this._age == this._maxAge){
      this._healty=false;
    }
  }
  // Produce some mangoes
  produceApple() {
    let fruit=Math.floor(Math.random()*99);
    for(let i=0;i<fruit;i++){
      let quality_fruit=Math.floor(Math.random()*(9-1)+1);
      let quality='';
      // console.log(i%quality_fruit);
      if(i%quality_fruit!=0){
        quality='good';
      }else{
        quality='bad';
      }
      let apple=new Apple(quality);
      this._fruit.push(apple);
    }
  }
  // Get some fruits
  harverst() {
    this._harvested=this._fruit.length;
    let good=0;
    let bad=0;
    for(let i=0;i<this._harvested;i++){
      if(this._fruit[i]._quality=='bad'){
        bad++;
      }else{
        good++;
      }
    }
    return {jumlah:this._harvested,bad:bad,good:good};
  }
}
class Apple {
  constructor(quality){
    this._quality=quality;
  }
}
//   * driver code untuk release 1
  console.log(`============== Thee tree is alive! :smile: =====================`);
  let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceApple();
    appleTree.harverst();
    console.log(`[Year ${appleTree.Age} Tahun Report] Height = ${appleTree.Height} Meter | Fruits harvested = ${appleTree.harverst().jumlah} Buah, ${appleTree.harverst().good} good, ${appleTree.harverst().bad} bad`)
  } while (appleTree.HealtyStatus != false);
  console.log(`The tree has met its end. :sad:`);

// Release 2
"use strict"

class FruitTree {
  constructor(maxAge,maxGrow,maxHeight,ageHarvest,fruit_name) {
    this._age=0;
    this._maxGrow=maxGrow;
    this._maxAge=maxAge;
    this._height=0;
    this._maxHeight=maxHeight;
    this._fruit=[];
    this._healty=true;
    this._harvested=0;
    this._ageHarvest=ageHarvest;
    this._fruit_name=fruit_name;
  }

  get Age() {
    return this._age;
  }
  get Height() {
    return this._height;
  }
  get Fruits() {
    return this._fruit;
  }
  get HealtyStatus() {
    return this._healty;
  }
  // Grow the tree
  grow() {
    this._age+=1;
    if(this._age<=this._maxGrow){
      let grow=Math.floor(Math.random()*(2-1)+1)/2;
      if(this._height <= this._maxHeight){
        this._height+=grow;
      }
    }
    if(this._age == this._maxAge){
      this._healty=false;
    }
  }
  // Produce some mangoes
  produceFruit() {
    let fruit=Math.floor(Math.random()*99);
    for(let i=0;i<fruit;i++){
      let quality_fruit=Math.floor(Math.random()*(9-1)+1);
      let quality='';
      // console.log(i%quality_fruit);
      if(i%quality_fruit!=0){
        quality='good';
      }else{
        quality='bad';
      }
      let fruit=new Fruit(quality);
      this._fruit.push(fruit);
    }
  }
  // Get some fruits
  harverst() {
    this._harvested=this._fruit.length;
    let good=0;
    let bad=0;
    for(let i=0;i<this._harvested;i++){
      if(this._fruit[i]._quality=='bad'){
        bad++;
      }else{
        good++;
      }
    }
    return {jumlah:this._harvested,bad:bad,good:good};
  }
}
class Fruit {
  constructor(quality){
    this._quality=quality;
  }
}
// ---------------------------------------------------------------------------------------------------//
class MangoFruit extends FruitTree{
  constructor (maxAge,maxGrow,maxHeight,ageHarvest,fruit_name){
    super();
    this._maxGrow=maxGrow;
    this._maxAge=maxAge;
    this._maxHeight=maxHeight;
    this._ageHarvest=ageHarvest;
    this._fruit_name=fruit_name;
  }
}

console.log('================================= Mango Tree ================================================');
let mangoFruit = new MangoFruit(20,15,7,2,'Mango Fruit');
do {
  mangoFruit.grow();
  mangoFruit.produceFruit();
  mangoFruit.harverst();
  console.log(`${mangoFruit._fruit_name} [Year ${mangoFruit.Age} Report] | Height = ${mangoFruit.Height} | Fruit harvested ${mangoFruit.harverst().jumlah}, ${mangoFruit.harverst().good} good, ${mangoFruit.harverst().bad} bad`)
} while (mangoFruit.HealtyStatus!= false)
console.log('================================= Mango Tree End ================================================');

class PearTree extends FruitTree{
    constructor (maxAge,maxGrow,maxHeight,ageHarvest,fruit_name){
      super();
      this._maxGrow=maxGrow;
      this._maxAge=maxAge;
      this._maxHeight=maxHeight;
      this._ageHarvest=ageHarvest;
      this._fruit_name=fruit_name;
  }
}
console.log('===================================== Pear Tree ==============================================');
let pearTree = new PearTree(10,7,5,1,'Pear Fruit');
do {
     pearTree.grow();
     pearTree.produceFruit();
     pearTree.harverst();
     console.log(`${pearTree._fruit_name} [Year ${pearTree.Age} Report] | Height = ${pearTree.Height} meter | Fruit harvested ${pearTree.harverst().jumlah}, ${pearTree.harverst().good} good, ${pearTree.harverst().bad} bad`)
} while (pearTree.HealtyStatus != false)
console.log('===================================== Pear Tree End ==============================================');

class AppleTree extends FruitTree{
  constructor (maxAge,maxGrow,maxHeight,ageHarvest,fruit_name){
    super();
    this._maxGrow=maxGrow;
    this._maxAge=maxAge;
    this._maxHeight=maxHeight;
    this._ageHarvest=ageHarvest;
    this._fruit_name=fruit_name;
  }
}
console.log('===================================== Apple Tree ==============================================');
let appleTree = new AppleTree(10,7,5,1,'Apple Fruit');
do {
     appleTree.grow();
     appleTree.produceFruit();
     appleTree.harverst();
     console.log(`${appleTree._fruit_name} [Year ${appleTree.Age} Report] | Height = ${appleTree.Height} meter | Fruit harvested ${appleTree.harverst().jumlah}, ${appleTree.harverst().good} good, ${appleTree.harverst().bad} bad`)
} while (appleTree.HealtyStatus != false)
console.log('===================================== Pear Tree End ==============================================');

// Release 3
class TreeGrove {
  constructor(){
    this._tree = [];
  }
  inputTree(name,age,height,fruit,healty) {

  }
  show_ages() {

  }
  show_trees() {

  }
  mature_trees() {

  }
  dead_trees() {

  }
}

// Driver code
let grove = new TreeGrove();
grove.inputTree('ManggoTree',3,1.8,7,true)
grove.inputTree('ManggoTree',5,2.4,12,true)
grove.inputTree('AppleTree',4,1.2,5,true)
grove.inputTree('PearTree',7,2,15,true)



