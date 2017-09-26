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

class PearFruit extends FruitTree{
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
let pearFruit = new PearFruit(10,7,5,1,'Pear Fruit');
do {
     pearFruit.grow();
     pearFruit.produceFruit();
     pearFruit.harverst();
     console.log(`${pearFruit._fruit_name} [Year ${pearFruit.Age} Report] | Height = ${pearFruit.Height} meter | Fruit harvested ${pearFruit.harverst().jumlah}, ${pearFruit.harverst().good} good, ${pearFruit.harverst().bad} bad`)
} while (pearFruit.HealtyStatus != false)
console.log('===================================== Pear Tree End ==============================================');

class AppleFruit extends FruitTree{
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
let appleFruit = new AppleFruit(10,7,5,1,'Apple Fruit');
do {
     appleFruit.grow();
     appleFruit.produceFruit();
     appleFruit.harverst();
     console.log(`${appleFruit._fruit_name} [Year ${appleFruit.Age} Report] | Height = ${appleFruit.Height} meter | Fruit harvested ${appleFruit.harverst().jumlah}, ${appleFruit.harverst().good} good, ${appleFruit.harverst().bad} bad`)
} while (appleFruit.HealtyStatus != false)
console.log('===================================== Pear Tree End ==============================================');

// Release 3
class TreeGrove {
  constructor(){
    this._tree = [];
  }
  inputTree(name,age,height,harverst,healty) {
    switch(name){
      case 'MangoTree':
        let mangoFruit = new MangoFruit()
        mangoFruit._fruit_name = name;
        mangoFruit._age = age;
        mangoFruit._height = height;
        mangoFruit._ageHarvest = harverst;
        mangoFruit._healty = healty;
        this._tree.push(mangoFruit)
        mangoFruit.grow()
        mangoFruit.produceFruit();
        mangoFruit.harverst();
        return this._tree
      break;
      case 'AppleTree':
        let appleFruit = new AppleFruit()
        appleFruit._fruit_name = name;
        appleFruit._age = age;
        appleFruit._height = height;
        appleFruit._ageHarvest = harverst;
        appleFruit._healty = healty;
        this._tree.push(appleFruit)
        appleFruit.grow()
        appleFruit.produceFruit();
        appleFruit.harverst();
        return this._tree
      break;
      case 'PearTree':
        let pearFruit = new PearFruit()
        pearFruit._fruit_name = name;
        pearFruit._age = age;
        pearFruit._height = height;
        pearFruit._ageHarvest = harverst;
        pearFruit._healty = healty;
        this._tree.push(pearFruit)
        pearFruit.grow()
        pearFruit.produceFruit();
        pearFruit.harverst();
        return this._tree
      break;
    }
  }
  show_ages() {
    this._tree.forEach(i=>{
      console.log(i._fruit_name+' Now age '+i._age+' Year');
    })
  }
  next_year() {
    this._tree.forEach(i=>{
      i._age += 1
      if(i._age != i._maxAge){
        i._height += 1
      }
      if(i._age == i._maxAge){
        i._healty = false
      }
      else{
        if(i._ageHarvest == i._age){
          i._fruit = Math.floor(Math.random()*i._fruit)
        }
      }
    })
  }
  show_tress() {
    this._tree.forEach(i=>{
      console.log(i._fruit_name+' now height is '+i._height+' meter')      
    })
  }
  mature_trees() {
    console.log('This fruits now :');
    this._tree.forEach(i=>{
      console.log(i._fruit_name+' have fruits '+i._fruit.length)
    })
  }
  dead_trees() {
    let deathTree=[]
    this._tree.forEach(i=>{
      if(i._healty == false){
        deathTree.push(i._fruit_name+' is death!')
      }
    })
    if(deathTree.length > 0){
      return deathTree;
    }
    else{
      console.log('Trees is a live all')
    }
  }
}

// Driver code
let grove = new TreeGrove();
grove.inputTree('MangoTree',3,1.8,7,true)
grove.inputTree('MangoTree',5,2.4,12,true)
grove.inputTree('AppleTree',4,1.2,5,true)
grove.inputTree('PearTree',7,2,15,true)
grove.next_year();
grove.show_ages();
grove.show_tress();
grove.dead_trees();
grove.mature_trees();