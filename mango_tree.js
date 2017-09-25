"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
  this.umur = 0
  this.maxAge = 25
  this.tinggi = 0
  this.kapasitas_buah = 30
  this.kumpulan_buah = []
  this.jumlah_buah = 0
  this.quality = true
  this.umur_mati_buah = 10
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


  // Get current states here

  // Grow the tree
  grow() {
  //jika umur !== maxumur
  if(this.umur !== this.maxAge){
    //umur bertambah
      this.umur++
    //tinggi bertambah
      this.tinggi += Math.floor(Math.random()*3)
    }
    //jika umur sama dengan umur mati maka false
  if(this.umur == this.umur_mati_buah){
      this.quality = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random()*5);
      for (var i = 0; i < random; i++) {
        this.kumpulan_buah.push(new Mango());
    }
  }

  // Get some fruits
  harvest() {
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

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.randomQuality();

  }

  randomQuality(){
    //random apakah "Good" atau "Buruk"
    let quality = ["Good","Bad"];
    let random = Math.floor(Math.random()*quality.length);
    if(random == 0){
      return "Good"
    } else {
      return "Bad"
    }
  }
}


  //  driver code untuk release 0
   let mango = new MangoTree()
   do {
     mango.grow();
     mango.produceMangoes();
     mango.harvest();
     console.log(`[Year ${mango.umur} Report] Height = ${mango.tinggi} | Fruits harvested = ${mango.harvested}`)
   } while (mango.quality != false)
  // /
//
// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {
//
// }
//
// // Release 3
// class TreeGrove {}
