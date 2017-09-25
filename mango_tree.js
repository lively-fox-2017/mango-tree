"use strict"

// release 0

class FruitTree {
  constructor(name) {
  this.umur = 0
  this.maxAge = 15
  this.tinggi = 0
  this.kapasitas_buah = 18
  this.kumpulan_buah = []
  this.jumlah_buah = 0
  this.quality = true
  this.umur_mati_buah = 5
  this.harvested = ''
  }

  getAge() {
  return this.umur;
  }

  getHeight() {
  return this.tinggi;
  }

  getFruits() {
  return jumlah_buah;
  }

  getHealtyStatus() {
  return this.quality;
  }


  grow() {
  if(this.umur !== this.maxAge){
      this.umur++
      this.tinggi += Math.random()
    }
  if(this.umur == this.umur_mati_buah){
      this.quality = false
    }
  }

  produceFruits() {
    let random = Math.floor(Math.random()*5);
      for (var i = 0; i < random; i++) {
        this.kumpulan_buah.push(new Mango());
    }
  }

// Get some fruits
  harvestFruits() {
    let bagus = 0
    let busuk = 0
    for (var i = 0; i < this.kumpulan_buah.length; i++) {
      if(this.kumpulan_buah[i].randomQuality() === 'Good'){
        bagus++
      } else {
        busuk++
      }
    }
    this.harvested = `${this.kumpulan_buah.length} (Good: ${bagus}, Bad: ${busuk})`
  }
}

class Fruits {
  constructor() {
    this.quality = this.randomQuality();
  }

  randomQuality(){
    let quality = ["Good","Bad"];
    let random = Math.floor(Math.random()*quality.length);
    if(random == 0){
      return "Good"
    } else {
      return "Bad"
    }
  }

}

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor(name) {
    super(name)
    this.umur_mati_buah = 10
  }
  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random()*6);
      for (var i = 0; i < random; i++) {
        this.kumpulan_buah.push(new Mango());
    }
  }
}

class Mango extends Fruits{
  // Produce a mango
  constructor() {
    super()
  }
}

// // Release 1
class AppleTree extends FruitTree{
    constructor(name){
      super(name)
        this.umur_mati_buah = 6
    }

    // Produce some mangoes
    produceApples() {
      let random = Math.floor(Math.random()*5);
        for (var i = 0; i < random; i++) {
          this.kumpulan_buah.push(new Apple());
      }
    }
}

class Apple extends Fruits{
  constructor() {
    super()
  }
}

class TreeGrove {
  constructor(){

  }
  inputTree(){}
  show_ages(){}
  mature_trees(){}
  dead_trees(){}
}

//  driver code untuk release 0 & 1
console.log('==================MANGGA TREE=================');
 let mangga = new MangoTree('Mango')
 do {
   mangga.grow();
   mangga.produceFruits();
   mangga.harvestFruits();
   console.log(`[Year ${mangga.umur} Report] Height = ${mangga.tinggi.toFixed(2)} M | Fruits harvested = ${mangga.harvested}`)
 } while (mangga.quality != false)
console.log('==================APEL TREE==================');
let apel = new AppleTree('Apple')
do {
  apel.grow();
  apel.produceFruits();
  apel.harvestFruits();
  console.log(`[Year ${apel.umur} Report] Height = ${apel.tinggi.toFixed(2)} M | Fruits harvested = ${apel.harvested}`)
} while (apel.quality != false)
console.log('=============================================');
 var grove = new TreeGrove()
 grove.inputTree('MangoTree',3,1.8,7,true)
 grove.inputTree('MangoTree',5,2.4,12,true)
 grove.inputTree('MangoTree',4,1.2,5,true)
 grove.inputTree('MangoTree',7,2,15,true)

 grove.nextYear()
 grove.showAge()
 grove.showTrees()
 grove.mature_trees()
 grove.dead_trees()

// // Release 3
// class TreeGrove {}
