"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor() {
    this._name = '' //nama pohon
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthyStatus = true
    this._harvested = ''
    this._startHarvest = 3 // umur pertama kali berbuah
    this._growth = 2 // pertumbuhan pertahun
    this._maxGrow = 10 //umur berhenti tumbuh
    this._mature = false
  }

  getAge() {
    return this._age
  }

  getHeight() {
    return this._height
  }

  getFruits() {
    return this._fruits
  }

  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    if (this._healthyStatus) {
      this._age += 1
    }
    let randomGrow = Math.floor(Math.random() * 5)
    if (this._age < this._maxGrow) { // stop grow
      this._height += this._growth
    }

    let randomDeath = 20 + Math.floor(Math.random() * 10)
    if (this._age >= randomDeath) { // end of life
      this._healthyStatus = false
    }
  }

  // Produce some fruits
  produceFruits() {
    if (this._age > this._startHarvest) {
      this._mature = true
      for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        let fruit = new Fruit
        fruit.quality = Math.floor(Math.random() * 2)
        this._fruits.push(fruit)
      }
    }
  }

  // Get some fruits
  harvest() {
    let goodFruits = 0
    let badFruits = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]['quality'] == 0) {
        goodFruits++
      } else {
        badFruits++
      }
    }
    this._fruits = []
    this._harvested = (goodFruits + badFruits) + ' (' + goodFruits + ' good, ' + badFruits + ' bad)'
  }

}

class Fruit {
  // Produce a mango
  constructor() {
    this.quality = 0 // 0 good and  1 bad
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._startHarvest = 4
  }
}


class TreeGrove {
  constructor() {
    this._trees = []
  }

  inputTree(name, startHarvest, growth, maxGrow) {
    let fruitTree = new FruitTree()
    fruitTree._name = name
    fruitTree._startHarvest = startHarvest // umur pertama kali berbuah
    fruitTree._growth = growth // pertumbuhan pertahun
    fruitTree._maxGrow = maxGrow //umur berhenti tumbuh
    this._trees.push(fruitTree)
  }


  nextYear() {
    for (let i = 0; i < this._trees.length; i++) {
      this._trees[i].grow()
    }
  }

  showTrees() {
    console.log('Total tree :', this._trees.length)
  }

  show_ages() {
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i]._name, 'age :', this._trees[i]._age)
    }
  }

  dead_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      if (!this._trees[i]._healthyStatus) {
        console.log(this._trees[i]._name, ' dead')
      }
    }
  }

  mature_trees() {
    for (let i = 0; i < this._trees.length; i++) {
      if (this._trees[i]._mature) {
        console.log(this._trees[i]._name, ' matured')
      }
    }
  }

}


let grove = new TreeGrove()

grove.inputTree('Mango_1', 3, 2, 7)
grove.inputTree('Mango_2', 3, 3, 5)
grove.inputTree('Apple_1', 3, 5, 10)
grove.inputTree('Pear_1', 5, 6, 10)

grove.showTrees()

for (let i = 0; i < 30; i++) {
  grove.nextYear()
}

grove.show_ages()

grove.mature_trees()

grove.dead_trees()



// * driver code untuk release 0
// let tree = new FruitTree()
// do {
//   tree.grow();
//   tree.produceFruits();
//   tree.harvest();
//   // console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
//   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
// } while (tree._healthyStatus != false)
//
//
// let mangotree = new MangoTree()
// do {
//   mangotree.grow();
//   mangotree.produceFruits();
//   mangotree.harvest();
//   // console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
//   console.log(`[Year ${mangotree._age} Report] Height = ${mangotree._height} | Fruits harvested = ${mangotree._harvested}`)
// } while (mangotree._healthyStatus != false)

//
// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}
