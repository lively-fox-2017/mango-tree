var MangoTree = require('./mango_tree.js');
var AppleTree = require('./apple_tree.js');
var PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.arrTree = [];
  }
  inputTree(name, currentAge, currentHeight, berbuah, healthyStatus) {
    var tree = null;
    if(name.indexOf("Mango") > -1){
      tree = new MangoTree(name, currentAge, currentHeight, berbuah, healthyStatus);
      this.arrTree.push(tree);
      console.log('mango');
    }
    else if(name.indexOf("Apple") > -1){
      tree = new AppleTree(name, currentAge, currentHeight, berbuah, healthyStatus);
      this.arrTree.push(tree);
      console.log('apple');
    }
    else{
      tree = new PearTree(name, currentAge, currentHeight, berbuah, healthyStatus);
      this.arrTree.push(tree);
      console.log('pear');
    }
    return tree;
  }
  show_ages() {
    var age = [];
    for (var i = 0; i < this.arrTree.length; i++) {
      age.push(this.arrTree[i]._age);
    }
    return age;
  }
  show_trees() {
    var tree = [];
    for (var i = 0; i < this.arrTree.length; i++) {
      tree.push(this.arrTree[i].treeName)
    }
    return tree;
  }
  mature_trees() {
    var tree = [];
    for (var i = 0; i < this.arrTree.length; i++) {
      this.arrTree[i].produceFruits();
      if (this.arrTree[i]._fruits.length > 0) {
        tree.push(this.arrTree[i].treeName);
        console.log(this.arrTree[i]._fruits);
      }
    }
    return tree;
  }
  dead_trees() {
    var dead = []
    for (var i = 0; i < this.arrTree.length; i++) {
      if (this.arrTree[i].healthyStatus === false) {
        dead.push(this.arrTree[i].treeName);
      }
    }
    return dead;
  }
  nextYear() {
    for (var i = 0; i < this.arrTree.length; i++) {
      this.arrTree[i].grow();
    }
  }
}


var groove = new TreeGrove();

groove.inputTree("Mango Tree", 3, 1.8, 7, true);
groove.inputTree("Mango Tree", 3, 1.9, 8, true);
groove.inputTree("Apple Tree", 4, 1.2, 5, true);
groove.inputTree("Pear Tree", 7, 2, 14, true);
var i = 0;
while (i < 15) {
  console.log('TAHUN ke -', i);
  groove.nextYear();
  console.log('UMUR pohon', groove.show_ages());
  console.log('nama nama pohon', groove.show_trees());
  console.log('pohon berbuah', groove.mature_trees());
  console.log('pohon mati', groove.dead_trees());
  i++;
  console.log('--------------------------');
}



// console.log("Mango Tree");
// //driver code untuk release 0
// let mangoTree = new MangoTree("Mango")
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`${mangoTree.treeName}[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested} (${mangoTree._fruits.good} good, ${mangoTree._fruits.bad} bad)`)
// } while (mangoTree.healthyStatus != false)
// console.log('The tree has met its end. :sad:');

// Release 1



// console.log("Apple Tree");
// let appleTree = new AppleTree("Apple")
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`${appleTree.treeName} [Year ${appleTree._age} Report] Height = ${appleTree._height} m | Fruits harvested = ${appleTree._harvested} (${appleTree._fruits.good} good, ${appleTree._fruits.bad} bad)`)
// } while (appleTree.healthyStatus != false)
// console.log('The tree has met its end. :sad:');
// console.log("Pear Tree");
// let pearTree = new PearTree("Pear")
// do {
//   pearTree.grow();
//   pearTree.producePears();
//   pearTree.harvest();
//   console.log(`${pearTree.treeName} [Year ${pearTree._age} Report] Height = ${pearTree._height} m | Fruits harvested = ${pearTree._harvested} (${pearTree._fruits.good} good, ${pearTree._fruits.bad} bad)`)
// } while (pearTree.healthyStatus != false)
// console.log('The tree has met its end. :sad:');
