"use strict"

// release 0

class MangoTree {
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.maks = 0;
    this.buah = 0;
    this.terpetik = 0;
    this.sehat = true;
    this.hasil = '';

  }

  getAge() {
    return this.umur
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this.buah
  }
  getHealtyStatus() {
    return this.sehat
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.umur += 1;
    this.tinggi += (this.umur *(Math.floor(Math.random()*20)))

    if(this.umur > (Math.floor(Math.random()*50))) {
      this.umur = 'of Death'
      this.sehat = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.tinggi !== 0) {
      this.buah += (Math.floor(Math.random()*50))
    } else {
      this.buah = 0
    }

    this.terpetik = 0
    return this
  }

  // Get some fruits
  harvest() {
    let buah = new Mango(this.buah)
    this.hasil = buah.harvested
    this.buah = 0
    return this
  }
}

class Mango {
  // Produce a mango
  constructor(jumlah) {
    this.harvested = this.kondisi(jumlah)
  }

  kondisi(jumlah) {
    var Baik = 0;
    var Buruk = 0;
    while (Baik + Buruk !== jumlah) {
      Baik = Math.round(Math.random()*jumlah)
      Buruk = jumlah - Baik
      if (Baik > jumlah) {
        jumlah = Baik
        Baik = jumlah
        Buruk = jumlah - Baik
      }
    }
    var hasil = jumlah + ' Buah ' + Baik + ' Baik ' + Buruk + ' Buruk '
    return hasil
  }
}

let mangoTree = new MangoTree()
var i = 0
console.log('Ini Pohon Mangga');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.hasil}`)
  i++
} while (mangoTree.sehat != false)

// Release 1
class AppleTree {
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.maks = 0;
    this.buah = 0;
    this.terpetik = 0;
    this.sehat = true;
    this.hasil = '';

  }

  getAge() {
    return this.umur
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this.buah
  }
  getHealtyStatus() {
    return this.sehat
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.umur += 1;
    this.tinggi += (this.umur *(Math.floor(Math.random()*20)))

    if(this.umur > (Math.floor(Math.random()*50))) {
      this.umur = 'of Death'
      this.sehat = false
    }
    return this
  }

  // Produce some mangoes
  produceFruits() {
    if (this.tinggi !== 0) {
      this.buah += (Math.floor(Math.random()*50))
    } else {
      this.buah = 0
    }

    this.terpetik = 0
    return this
  }

  // Get some fruits
  harvest() {
    let buah = new Apple(this.buah)
    this.hasil = buah.harvested
    this.buah = 0
    return this
  }
}
class Apple {
   // Produce an apple
   constructor(jumlah) {
    this.harvested = this.kondisi(jumlah)
  }

  kondisi(jumlah) {
    var Baik = 0;
    var Buruk = 0;
    while (Baik + Buruk !== jumlah) {
      Baik = Math.round(Math.random()*jumlah)
      Buruk = jumlah - Baik
      if (Baik > jumlah) {
        jumlah = Baik
        Baik = jumlah
        Buruk = jumlah - Baik
      }
    }
    var hasil = jumlah + ' Buah ' + Baik + ' Baik ' + Buruk + ' Buruk '
    return hasil
  }
}

let appleTree = new AppleTree()
var i = 0
console.log('Ini Pohon Apel');
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.tinggi} | Fruits harvested = ${appleTree.hasil}`)
  i++
} while (appleTree.sehat != false)

// Release 2
class FruitTree {
  constructor(name = "Fruit") {
    this.name = name
    this.umur = 0;
    this.tinggi = 0;
    this.maks = 0;
    this.buah = 0;
    this.terpetik = 0;
    this.sehat = true;
    this.hasil = '';

  }

  getAge() {
    return this.umur
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this.buah
  }
  getHealtyStatus() {
    return this.sehat
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.umur += 1;
    this.tinggi += (this.umur *(Math.floor(Math.random()*20)))

    if(this.umur > (Math.floor(Math.random()*50))) {
      this.umur = 'of Death'
      this.sehat = false
    }
    return this
  }

  // Produce some fruits
  produceFruits() {
    if (this.tinggi !== 0) {
      this.buah += (Math.floor(Math.random()*50))
    } else {
      this.buah = 0
    }

    this.terpetik = 0
    return this
  }

  // Get some fruits
  harvest() {
    let buah = new Fruit(this.buah, this.name)
    this.hasil = buah.harvested
    this.buah = 0
    return this
  }
}

class Fruit {
  // Produce a mango
  constructor(jumlah,name) {
    this.harvested = this.kondisi(jumlah,name);
  }

  kondisi(jumlah, name) {
    var Baik = 0;
    var Buruk = 0;
    while (Baik + Buruk !== jumlah) {
      Baik = Math.round(Math.random()*jumlah)
      Buruk = jumlah - Baik
    }
    var hasil = `${jumlah} ${name} ${Baik} Baik ${Buruk} Buruk `
    return hasil
  }

}

class PearTree extends FruitTree {
  
}

let pearTree = new PearTree("Pear")
var i = 0
// console.log(pearTree.name)
console.log('Ini Pohon Pir');
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.umur} Report] Height = ${pearTree.tinggi} | Fruits harvested = ${pearTree.hasil}`)
  i++
} while (pearTree.sehat != false)

// Release 3
class TreeGrove {
  constructor() {
    this.arrayPohon = [];
  }

  inputTree(namaPohon,umur,tinggi,buahSekarang,status) {
    this.name = namaPohon
    this.age = umur
    this.height = tinggi
    this.fruit = buahSekarang
    this.hidup = status
    if (this.name === 'MangoTree') {
      let mango = new MangoTree()
      mango.umur = umur
      mango.tinggi = tinggi
      mango.buah = buahSekarang
      mango.sehat = status
      this.arrayPohon.push(mango)
      return this.arrayPohon
    } else if (this.name === 'PearTree'){
      let pear = new PearTree()
      pear.umur = umur
      pear.tinggi = tinggi
      pear.buah = buahSekarang
      pear.sehat = status
      this.arrayPohon.push(pear)
      return this.arrayPohon
    } else if (this.name === 'AppleTree') {
      let apple = new AppleTree()
      apple.umur = umur
      apple.tinggi = tinggi
      apple.buah = buahSekarang
      apple.sehat = status
      this.arrayPohon.push(apple)
      return this.arrayPohon
    }
  }

  show_ages() {
    for(var i = 0; i < this.arrayPohon.length; i++) {
      console.log('Ini umur ' + this.arrayPohon[i].constructor.name + ' saat ini ' + this.arrayPohon[i].umur)
    }
  }

  nextYear() {
    for(var i = 0; i < this.arrayPohon.length; i++) {
      var temp = this.arrayPohon[i].umur
      console.log(this.arrayPohon[i].constructor.name + ' Tahun depan akan berumur ' + (temp + 1))
    }
  }

  show_trees() {
    console.log('\n' + 'Ini nama-nama pohon : ' + '\n')
    for(var i = 0; i < this.arrayPohon.length; i++) {
      console.log(this.arrayPohon[i].constructor.name)
    }
  }

  mature_trees() {
    for(var i = 0; i < this.arrayPohon.length; i++) {
      if(this.arrayPohon[i].sehat) {
      console.log('Ini yang lagi matang ' + this.arrayPohon[i].constructor.name)
      }
      // console.log(this.arrayPohon[i].sehat)      
    }
  }

  dead_trees() {
    for(var i = 0; i < this.arrayPohon.length; i++) {
      if(this.arrayPohon[i].umur > (Math.floor(Math.random()*10))) {
        console.log(this.arrayPohon[i].constructor.name + ' MATI DI UMUR ' + this.arrayPohon[i].umur);
      }
    }
  }

}

let grove = new TreeGrove()
console.log('-------------------------------------------------')
grove.inputTree("MangoTree",3,1.8,7,true)
grove.inputTree("AppleTree",4,2.1,8,true)
grove.show_ages()
grove.mature_trees()
grove.nextYear()
grove.show_trees()
grove.dead_trees()

