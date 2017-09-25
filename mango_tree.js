"use strict"

class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._harvested = 0
    this.healthyStatus = true
    this._stopGrowing = 15
    this._maxAge = 15
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
    return this.healthyStatus
  }

}

class Fruit {
  constructor() {
    this.quality = this.qualityBuah()
  }

  qualityBuah() {
    let arr = ['good','bad']
    let random = Math.floor(Math.random() * arr.length)

    if (random == 0) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}

// release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super()
    this._stopGrowing = 10
    this._maxAge = 10
  }

  // Grow the tree
  grow() {
    this._age = this._age + 1

    if (this._age < this._stopGrowing) {
      let random = Math.random()
      this._height += random
    }

    if (this._age == this._maxAge) {
      this.healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
      let random = Math.floor(Math.random() * 10) // menghasilkan nilai 0 atau 1
      // console.log(random);
      for (var i = 0; i < random; i++) {
          this._fruits.push(new Mango())
      }
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;

    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'good') {
        good = good + 1
      } else {
        bad = bad + 1
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super()

  }

}

//Release 1
class AppleTree extends FruitTree {
    constructor() {
      super()
      this._stopGrowing = 8
      this._maxAge = 8
    }
    // Grow the tree
    grow() {
      this._age = this._age + 1

      if (this._age < this._stopGrowing) {
        let random = Math.random()
        this._height += random
      }

      if (this._age == this._maxAge) {
        this.healthyStatus = false
      }
    }

    // Produce some mangoes
    produceApples() {
        let random = Math.floor(Math.random() * 5)
        // console.log(random);
        for (var i = 0; i < random; i++) {
            this._fruits.push(new Apple())
        }
    }

    // Get some fruits
    harvest() {
      let good = 0;
      let bad = 0;

      for (let i = 0; i < this._fruits.length; i++) {
        if (this._fruits[i].quality === 'good') {
          good = good + 1
        } else {
          bad = bad + 1
        }
      }
      this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
    }
}
class Apple extends Fruit {
  // Produce a mango
  constructor() {
    super()
  }
}

  //driver code untuk release 0
    let mangoTree = new MangoTree()
    console.log('============================ Mango Tree Growth ================================');
    console.log('The Mangoo Tree Is Alive!');
    do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
      console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} M | Fruits harvested = ${mangoTree._harvested}`)
    } while (mangoTree.healthyStatus != false)

    //driver code untuk release 0
      let appleTree = new AppleTree()
      console.log('============================== Apple Tree Growth ==============================');
      console.log('The Apple Tree Is Alive!');
      do {
      appleTree.grow();
      appleTree.produceApples();
      appleTree.harvest();
        console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(2)} M | Fruits harvested = ${appleTree._harvested}`)
      } while (appleTree.healthyStatus != false)
      console.log('===============================================================================');


// Release 3
class TreeGrove {}
