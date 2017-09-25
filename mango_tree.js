"use strict"

// release 0

class FruitTree {
  constructor(umur,tinggi,sehat, fruit,nama) {
  this.umur = 0
  this.maxAge = 15
  this.tinggi = 0
  this.kapasitas_buah = 18
  this.kumpulan_buah = []
  this.jumlah_buah = 0
  this.quality = true
  this.umur_mati_buah = 5
  this.harvested = ''
  this.maxbuah = 0
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
// ======================POHON BUAH==============================
class MangoTree extends FruitTree{
// umurTree, tinggiTree, umurTreeKetikaPertamaKaliBerbuah, healthyStatus
  // Initialize a new MangoTree
  constructor(umur = 0,tinggi = 0,sehat = true, nama = 'Mango') {
    super(umur,tinggi,sehat,nama)
    this.umur_mati_buah = 10
    this.maxbuah = 13
  }
  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random()*this.maxbuah);
      for (var i = 0; i < random; i++) {
        this.kumpulan_buah.push(new Mango());
    }
  }
}

// // Release 1
class AppleTree extends FruitTree{
    constructor(umur = 0,tinggi = 0,sehat = true, nama = 'Apel'){
      super(umur,tinggi,sehat,nama)
        this.umur_mati_buah = 6
        this.maxbuah = 12
    }

    // Produce some mangoes
    produceApples() {
      let random = Math.floor(Math.random()*this.maxbuah);
        for (var i = 0; i < random; i++) {
          this.kumpulan_buah.push(new Apple());
      }
    }
}

class PearTree extends FruitTree{
    constructor(umur = 0,tinggi = 0,sehat = true, nama = 'Pear'){
      super(umur,tinggi,sehat,nama)
        this.umur_mati_buah = 15
        this.maxbuah = 8
        this.maxAge = 8

    }

    // Produce some mangoes
    producePears() {
      let random = Math.floor(Math.random()*this.maxbuah);
        for (var i = 0; i < random; i++) {
          this.kumpulan_buah.push(new Pear());
      }
    }
}
// ======================================================================
// =============================FRUITS===================================
class Mango extends Fruits{
  constructor() {
    super()
  }
}

class Apple extends Fruits{
  constructor() {
    super()
  }
}

class Pear extends Fruits{
  constructor() {
    super()
  }
}

class TreeGrove {
  constructor() {
    this.pohon = [];
  }

  inputTree(namaTree, umurTree, tinggiTree, umurTreeKetikaPertamaKaliBerbuah, healthyStatus) {
    if(namaTree == 'MangoTree'){
      let mango = new MangoTree()
      mango.name = namaTree
      mango.umur = umurTree
      mango.tinggi = tinggiTree
      mango.umurBerbuah = umurTreeKetikaPertamaKaliBerbuah
      mango.quality = healthyStatus
      this.pohon.push(mango)
    }
    if(namaTree == 'AppleTree'){
      let apel = new AppleTree()
      apel.name = namaTree
      apel.umur = umurTree
      apel.tinggi = tinggiTree
      apel.umurBerbuah = umurTreeKetikaPertamaKaliBerbuah
      apel.quality = healthyStatus
      this.pohon.push(apel)
    }
    if(namaTree == 'PearTree'){
      let pear = new PearTree()
      pear.name = namaTree
      pear.umur = umurTree
      pear.tinggi = tinggiTree
      pear.umurBerbuah = umurTreeKetikaPertamaKaliBerbuah
      pear.quality = healthyStatus
      this.pohon.push(pear)
    }
  }

  nextYear(){
    for (var i = 0; i < this.pohon.length; i++) {
      if(this.pohon[i].umur !== this.pohon[i].maxAge){
        this.pohon[i].umur++
        // console.log(this.pohon[i].umurBerbuah,this.pohon[i].umur);
        if(this.pohon[i].umur == this.pohon[i].umurBerbuah){
          this.pohon[i].jumlah_buah += Math.round(Math.random()*this.pohon[i].maxbuah)
        }
      }
      if(this.pohon[i].umur == this.pohon[i].maxAge){
        this.pohon[i].quality = false
      }
    }
  }

  showAges(){
    for (var i = 0; i < this.pohon.length; i++) {
      console.log(`Pohon ini berumur : `+this.pohon[i].umur.toFixed(2)+' M')
    }
  }

  showTrees(){
    for (var i = 0; i < this.pohon.length; i++) {
      console.log(`Pohon ini bernama : `+this.pohon[i].name);
    }
  }

  matureTrees(){
    for (var i = 0; i < this.pohon.length; i++) {
      console.log(`Jumlah buah yang berbuah : `+this.pohon[i].jumlah_buah);
    }
  }

  deadTrees(){
    for (var i = 0; i < this.pohon.length; i++) {
      console.log(`Jumlah buah yang mati : `+this.pohon[i].quality);
    }
  }
}


//  driver code untuk release 0 & 1
console.log('==================MANGGA TREE=================');
 let mangga = new MangoTree('Mango')
 do {
   mangga.grow();
   mangga.produceMangoes();
   mangga.harvestFruits();
   console.log(`[Year ${mangga.umur} Report] Height = ${mangga.tinggi.toFixed(2)} M | Fruits harvested = ${mangga.harvested}`)
 } while (mangga.quality != false)
console.log('==================APEL TREE==================');
let apel = new AppleTree('Apple')
do {
  apel.grow();
  apel.produceApples();
  apel.harvestFruits();
  console.log(`[Year ${apel.umur} Report] Height = ${apel.tinggi.toFixed(2)} M | Fruits harvested = ${apel.harvested}`)
} while (apel.quality != false)
console.log('=============================================');

var grove = new TreeGrove()
grove.inputTree("MangoTree",3,1.8,7,true)
grove.inputTree("MangoTree",5,2.4,12,true)
grove.inputTree("AppleTree",4,1.2,5,true)
grove.inputTree("PearTree",7,2,15,true)

grove.nextYear()
grove.showAges()
grove.showTrees()
grove.matureTrees()
grove.deadTrees()
