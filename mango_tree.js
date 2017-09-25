"use strict"

// release 0
class FruitTree {
  constructor(nama) {
    this.age = 0;
    this.height = 0;
    this.harvested = 0;
    this.produksi = [];
    this.batasUmur = 10;
    this.stopGrowing = 8;
    this.healthyStatus = true;

  }

  getAge() {
    return this.age;

  }
  getHeight() {
    return this.height

  }
  getFruits() {
    return this.harvested;
  }

  gethealthyStatus() {
    return this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age = this.age + 1
 
    if (this.age < this.stopGrowing) {
      let random = Math.random()
      this.height = random
    }
 
    if (this.age == this.batasUmur) {
      this.healthyStatus = false
    }
  }

  harvest() {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this.produksi.length; i++) {
      if (this.produksi[i].quality === 'good') {
        good = good + 1;
      } else {
        bad = bad + 1
      }
    }
    this.harvested = `${this.produksi.length} ${good} good ${bad} bad`;
  }

}



class Fruit {
  constructor() {
    this.quality = this.kualitas();
  }
  kualitas() {
    let arr = ['good', 'bad'];
    
      let random = Math.round(Math.random() * arr.length)
      if (random == 0) {
        return 'good';
      } else {
         return 'bad';
      }
    }
}



class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(nama) {
    super(nama)
    this.batasUmur = 9;
    this.stopGrowing = 6;
    this.maxUmur = 13;

  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.random() * 10;
    for (let i = 0; i < random; i++) {
      this.produksi.push(new Mango);
    }
  }

  // Get some fruits
  
}

class Mango extends Fruit {
  // Produce a mango
  constructor (){
    super()
  }
 
}




// Release 1
class AppleTree extends FruitTree  {
  constructor (nama){
    super (nama)
    this.batasUmur = 15;
    this.stopGrowing = 7;
    this.maxUmur = 19;


 }
 

  produceAples() {
    let random = Math.random() * 10;
    for (let i = 0; i < random; i++) {
      this.produksi.push(new Apple);
    }
  }

}
class Apple extends Fruit {
  constructor() {
    super ()
  }

}
class Pear extends Fruit {
  constructor() {
    super ()
  }

}






// Release 3
// class TreeGrove {
//   constructor (){
//     this.treeName 
//   }
//   inputTree(namaTree,umurTree,tinggiTree,umurTreeKetikaPertamaKaliBerbuah, healthyStatus) {
//     let buah = new FruitTree 

//   }
// }

///driver code untuk release 0
let mangoTree = new MangoTree()
console.log('============================ Mango Tree Growth ================================');
console.log('The Mangoo Tree Is Alive!');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} M | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)



let appleTree = new AppleTree()
console.log('============================ apple Tree Growth ================================');
console.log('The appleo Tree Is Alive!');
do {
  appleTree.grow();
  appleTree.produceAples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} M | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
