"use strict"

// Release 2
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this.healthyStatus = true
    this._quality = new Fruit()
    this._harvested = this.produceFruits()
    
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

  harvest() {
    this._quality.good = Math.floor(Math.random() * this._harvested)
    this._quality.bad = this._harvested - this._quality.good
  }

  produceFruits() {
    this._harvested = Math.floor(Math.random()*20)
  }
}


class Fruit {
  constructor() {
    this.bad = 0
    this.good = 0
  }
}

// release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor() {
    super()
    this._harvested = this.produceMangoes()
    this._quality = new Mango()    
  }

  // Grow the tree
  grow() {
    this._age += 1
    

    if(this._age <= 20){
      for(var i = 0; i < this._age; i++){
        if(this._height < 7){
         this._height += (Math.random() * 0.1)
       }
      }    
      
      // return `[Year ${this._age} Report] Height = ${this._height.toFixed(2)}m | Fruits harvested ${this._harvested} (${this._quality.good}, ${this._quality.bad})`
    }
    else {
      this.healthyStatus = false
      // return 'sdh tua umur ' + this._age + ' dan tinggi ' + this._height
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._harvested = Math.floor(Math.random()*20)
  }

}


class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super()
  }
  
}

    
   // driver code untuk release 0
   let mangoTree = new MangoTree()
   // console.log(mangoTree)
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(2)} | Fruits harvested = ${mangoTree._harvested} (${mangoTree._quality.good} good, ${mangoTree._quality.bad} bad )`)
  } while (mangoTree.healthyStatus != false)
 

// Release 1
class AppleTree extends FruitTree{
  constructor(){
    super()
    this._harvested = this.produceApples()
    this._quality = new Apple()
  }
  grow() {
    this._age += 1
    

    if(this._age <= 25){
      for(var i = 0; i < this._age; i++){
        if(this._height < 7){
         this._height += (Math.random() * 0.3)
       }
      }    
      
    }
    else {
      this.healthyStatus = false
    }
  }

  produceApples() {
    this._harvested = Math.floor(Math.random()*25)
  }


}
class Apple extends Fruit {
  constructor(){
    super()
  }
}


 // driver code untuk release 1
   let appleTree = new AppleTree()
   do {
     appleTree.grow();
     appleTree.produceApples();
     appleTree.harvest();
    console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(2)} | Fruits harvested = ${appleTree._harvested} (${appleTree._quality.good} good, ${appleTree._quality.bad} bad )`)
  } while (appleTree.healthyStatus != false)
 

class PeerTree extends FruitTree{
  constructor(){
    super()
    this._harvested = this.producePeers()
    this._quality = new Peer()
  }
  grow() {
    this._age += 1
    

    if(this._age <= 30){
      for(var i = 0; i < this._age; i++){
        if(this._height < 7){
         this._height += (Math.random() * 0.2)
       }
      }    
      
    }
    else {
      this.healthyStatus = false
    }
  }

  producePeers() {
    this._harvested = Math.floor(Math.random()*17)
  }


}
class Peer extends Fruit {
  constructor(){
    super()
  }
}

 let peerTree = new PeerTree()
   do {
     peerTree.grow();
     peerTree.producePeers();
     peerTree.harvest();
    console.log(`[Year ${peerTree._age} Report] Height = ${peerTree._height.toFixed(2)} | Fruits harvested = ${peerTree._harvested} (${peerTree._quality.good} good, ${peerTree._quality.bad} bad )`)
  } while (peerTree.healthyStatus != false)


// Release 3
class TreeGrove {
  constructor(){
    this._tree_name = []
    this.age = []
    this.height = []
    this.healthyStatus = []
    this.dead = []
  }

  inputTree(treeName, age, height, dead,healthyStatus){
    this._tree_name.push(treeName)
    this.age.push(age)
    this.height.push(height)
    this.healthyStatus.push(healthyStatus)
    this.dead.push(dead)
  }

  showAge(){
    
    for(var i = 0; i < this.age.length; i++){
      console.log(`${this._tree_name[i]} memiliki umur ${this.age[i]} tahun` )
    }

    return ''
  }

  showTree(){
    for(var i = 0; i < this._tree_name.length; i++){
      console.log(`pohon yang terdaftar ${this._tree_name[i]}` )
    }

    return 
  }

  deadTree(){
    for(var i = 0; i < this.healthyStatus.length; i++){
      if(this.healthyStatus[i] === false){
        console.log(`pohon yang telah mati ${this._tree_name[i]}` )
      }
      
    }

    return 
  }

  matureTree(){
    for(var i = 0; i < this.healthyStatus.length; i++){
      if(this.healthyStatus[i] === true){
        console.log(`pohon yang sedang berbuah ${this._tree_name[i]}` )
      }
      
    }

    return 
  }

}

var grove = new TreeGrove();
grove.inputTree('MangoTree', 3, 1.8, 7, true)
grove.inputTree('MangoTree', 5, 2.4, 12, true)
grove.inputTree('AppleTree', 4, 1.2, 5, true)
grove.inputTree('PearTree', 7, 2, 15, true)
grove.inputTree('PearTree', 7, 2, 20, false)
console.log(grove)

grove.showAge()
grove.showTree()
grove.deadTree()
grove.matureTree()
