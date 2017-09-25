"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._kapasitasBuah = 20
    this._kumpulanbuah = 0
    this._harvested = 0
    this._healthyStatus = true
    this.quality = new Fruit()
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this._kumpulanbuah
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this._age < 20) {
      this._age++
      this._height = this._height + Math.random()
      this.produceMangoes()
      this.harvest()
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._kumpulanbuah = Math.floor(Math.random() * 20 + 1)
  }

  // Get some fruits
  harvest() {
    this._harvested = this._kumpulanbuah
    this._kumpulanbuah = 0
    this.quality.good = Math.floor(Math.random() * this._harvested + 1)
    this.quality.bad = this._harvested - this.quality.good
  }

  status() {
    if(this._age == 20) {
      this._healthyStatus = false
      return 'pohon tetangga telah tiada'
    }
    else {
      return ''
    }
  }

}

class Fruit {
  // Produce a mango
  constructor() {
    this.good = 0
    this.bad = 0
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

// Release 1
//class AppleTree {}
//class Apple {}

// Release 2
//class FruitTree {}
//class Fruit {}

// Release 3
//class TreeGrove {}

class AppleTree extends FruitTree {
  constructor() {
    super()
    this.quality = new Apple()
  }
  grow() {
    if(this._age < 40) {
      this._age++
      this._height = this._height + Math.random()
      if(this._age >= 20) {
        this.produceMangoes()
        this.harvest()
      }

    }
  }

  status() {
    if(this._age == 40) {
      this._healthyStatus = false
      return 'pohon tetangga telah tiada'
    }
    else {
      return ''
    }
  }
}

class Apple extends Fruit {
  constructor() {
    super()
    this.nama = 'apel'
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super()
    this.quality = new Mango()
  }
}

class Mango extends Fruit {
  constructor() {
    super()
    this.nama = 'Mango'
  }
}

class PearTree extends FruitTree {
  constructor() {
    super()
    this.quality = new Pear()
  }

  grow() {
    if(this._age < 30) {
      this._age++
      this._height = this._height + Math.random()
      this.produceMangoes()
      this.harvest()
    }
  }
  status() {
    if(this._age == 30) {
      this._healthyStatus = false
      return 'pohon tetangga telah tiada'
    }
    else {
      return ''
    }
  }
}

class Pear extends Fruit {
  constructor() {
    super()
    this.nama = 'Pear'
  }
}

var apelmalam = new AppleTree()

do {
   apelmalam.grow();
   console.log(`[Year ${apelmalam._age} Report] Height = ${apelmalam._height.toFixed(2)} | ${apelmalam.quality.nama} harvested = ${apelmalam._harvested} (${apelmalam.quality.good} good, ${apelmalam.quality.bad} bad)`)
   console.log(apelmalam.status())
 } while (apelmalam._healthyStatus != false)

 var mangoTree = new MangoTree()

 do {
    mangoTree.grow();
    //mangoTree.produceMangoes();
    //mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | ${mangoTree.quality.nama} harvested = ${mangoTree._harvested} (${mangoTree.quality.good} good, ${mangoTree.quality.bad} bad)`)
    console.log(mangoTree.status())
  } while (mangoTree._healthyStatus != false)

  var pear = new PearTree()

  do {
     pear.grow();
     //mangoTree.produceMangoes();
     //mangoTree.harvest();
     console.log(`[Year ${pear._age} Report] Height = ${pear._height.toFixed(2)} | ${pear.quality.nama} harvested = ${pear._harvested} (${pear.quality.good} good, ${pear.quality.bad} bad)`)
     console.log(pear.status())
   } while (pear._healthyStatus != false)
