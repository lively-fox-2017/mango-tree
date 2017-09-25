"use strict"

// release 2

class FruitTree {
  constructor(name, age = 0, height = 0, maxAge = 0, healthy = true, minHarvest = 0) {
    this._name = name
    this._age = age
    this._maxAge = maxAge
    this._height = height
    this._minHarvest = minHarvest
    this._harvested = 0
    this._healthyStatus = healthy
    this._stopGrowing = Math.floor(0.75 * this._maxAge)
    this._fruits = []
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._harvested
  }
  getHealtyStatus() {
    return this._healthyStatus
  }

  // Grow the tree
  grow() {
    this._age++
    if (this._age <= this._stopGrowing) {
      let random = Math.floor(Math.random()*4)
      this._height += random
    }
    if (this._age == this._maxAge) {
      this._healthyStatus = false
    }
    if(this._healthyStatus == true && this._age >= this._minHarvest ){
      this._totalFruits = Math.floor(Math.random()*20);
    }
  }

  harvest() {
    let good = 0
    let bad = 0
    for (var i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') {
        good++
      }else {
        bad++
      }
    }
    this._harvested = this._fruits.length +' (good '+good+' bad '+bad +')'
  }


}

class Fruit {
  constructor() {
    this._quality = this.randomBuah()
  }
  randomBuah(){
    this._isQuality = ['good','bad']
    this._quality = this._isQuality[Math.floor(Math.random()*this._isQuality.length)]
    return this._quality
  }
}

//release 0
class MangoTree extends FruitTree {
  constructor(name, age, height, healthy) {
    super(name, age, height, 25, healthy, 5)
  }
  // Produce some mangoes
  produceMangoes() {
    for (var i = 0; i < this._totalFruits; i++) {
      this._fruits.push(new Mango())
    }
  }

}

class Mango extends Fruit {
  constructor(){
    super();
  }

}

 // driver code untuk release 0
  //  let mangoTree = new MangoTree('MangoTree',3,1.2,true)
  //  do {
  //    mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    mangoTree.harvest();
  //    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Mangoes harvested = ${mangoTree._harvested}`)
  //  } while (mangoTree._healthyStatus != false)


// Release 1
class AppleTree extends FruitTree {
  constructor(name, age, height, healthy) {
    super(name, age, height, 20, healthy, 4 )
  }
  // Produce some Apples
  produceApples() {
    for (var i = 0; i < this._totalFruits; i++) {
      this._fruits.push(new Apple())
    }
  }

}

class Apple extends Fruit {
  constructor(){
    super();
  }

}

// let appleTree = new AppleTree('AppleTree',4,1.5,true)
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Apples harvested = ${appleTree._harvested}`)
// } while (appleTree._healthyStatus != false)

class PearTree extends FruitTree {
  constructor(name, age, height, healthy) {
    super(name, age, height, 18, healthy, 7 )
  }
  // Produce some pears
  producePears() {
    for (var i = 0; i < this._totalFruits; i++) {
      this._fruits.push(new Pear())
    }
  }

}

class Pear extends Fruit {
  constructor(){
    super();
  }

}

// let pearTree = new PearTree('PearTree',2,1,true)
// do {
//   pearTree.grow();
//   pearTree.producePears();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | Pears harvested = ${pearTree._harvested}`)
// } while (pearTree._healthyStatus != false)

// Release 3
class TreeGrove {
  constructor(){
    this.trees_Data = []
    this.fruited_Trees = ''
    this.fallen_Trees = ''
  }

  inputTree(name, ages, height, healthy){
    let tree = {}
    if(name == 'MangoTree'){
      tree = new MangoTree(name, ages, height, healthy);
    } else if(name == 'AppleTree'){
      tree = new AppleTree(name, ages, height, healthy);
    } else if(name == 'PearTree'){
      tree = new PearTree(name, ages, height, healthy);
    }
    this.trees_Data.push(tree);
  }

  showAges(){
    let treesAge = []
    for(var i = 0; i < this.trees_Data.length; i++){
      treesAge.push(this.trees_Data[i]._name + ' Berusia '+ this.trees_Data[i]._age+ ' Tahun')
    }
    return treesAge
  }

  showTrees(){
    let listOf_tree = ''
    for(var i = 0; i < this.trees_Data.length; i++){
      listOf_tree += this.trees_Data[i]._name + ', '
    }
    return listOf_tree

  }

  mature_tress(){
    let fruited = false;
    this.fruited_Trees = ''
    for(var i = 0; i < this.trees_Data.length; i++){
      if(this.trees_Data[i]._age >= this.trees_Data[i]._minHarvest && this.trees_Data[i]._healthyStatus == true){
        fruited = true;
        this.fruited_Trees += this.trees_Data[i]._name + ', '
      }
    }
    if(fruited == false){
      return 'Tidak ada'
    } else {
      return this.fruited_Trees
    }

  }

  dead_tress(){
    let fallentree = false;
    this.fallen_Trees = ''
    for(let i = 0; i < this.trees_Data.length; i++){
      if(this.trees_Data[i]._healthyStatus == false){
        fallentree = true;
        this.fallen_Trees += this.trees_Data[i]._name + ', '
      }
    }
    if(fallentree == false){
      return 'Tidak ada pohon mati'
    } else {
      return this.fallen_Trees
    }

  }

  nextYear(){
    for(let i = 0; i < this.trees_Data.length; i++){
      this.trees_Data[i].grow();
    }
  }

  is_all_dead(){
    let allFall = false;
    for(let i = 0; i < this.trees_Data.length; i++){
      if(this.trees_Data[i]._healthyStatus == false){
        allFall = true;
      } else {
        return false;
      }
    }
    if(allFall == true){
      return true;
    }
  }

}

var grove = new TreeGrove();

// nama_pohon,usia,tinggi,kesehatan
grove.inputTree('MangoTree', 3, 1.8, true)
grove.inputTree('AppleTree', 4, 1.2, true)
grove.inputTree('PearTree', 7, 2, true)

while(grove.is_all_dead() == false){
  console.log('--------------- Tahun Berikutnya ---------------')
  grove.nextYear()
  console.log('---------------- Data Pohon -----------------');
  console.log(grove.showTrees())
  console.log('---------------------------------------------');
  // show tree ages done
  console.log(grove.showAges());
  // mature_tress
  console.log('---------Data Pohon Berbuah-------------');
  console.log(grove.mature_tress());
  console.log('----------Data Pohon Mati-------------------');
  console.log(grove.dead_tress())

}
