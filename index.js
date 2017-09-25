"use strict"

/**
 *
 * RELEASE 3
 *
 */

let TreeGrove = require('./tree_grove.js');

let grove = new TreeGrove();

// Grove parameters: name, age, height, startProducing, health
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);

grove.nextYear();

console.log(grove.showAge());

console.log(grove.showTrees());

console.log(grove.matureTrees());

console.log(grove.deadTrees());


/**
 *
 * RELEASE 2
 *
 */

// let MangoTree = require('./mango_tree.js');
// let AppleTree = require('./apple_tree.js');
// let PearTree = require('./pear_tree.js');

// Parameters: name, heightIncrement, stoppedGrowingAt, startProducing, fruitsPerYear
// let mangoTree = new MangoTree('Mango', 100, 10, 2, 20);
// let appleTree = new AppleTree('Apple', 50, 5, 5, 40);
// let pearTree = new PearTree('Pear', 20, 4, 7, 10);

// console.log(`The ${mangoTree.getName()} tree is alive!`);

// do {

//   mangoTree.grow();
//   mangoTree.produceFruits();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight() / 100} m | Fruits harvested = ${mangoTree._harvested} (${mangoTree._qualityCounts[0]} good, ${mangoTree._qualityCounts[1]} bad)`);

// } while (mangoTree.getHealthStatus() !== false);

// console.log(`The ${mangoTree.getName()} tree has met its end.`);

// console.log('----------------------------------------------------------');

// console.log(`The ${appleTree.getName()} tree is alive!`);

// do {

//   appleTree.grow();
//   appleTree.produceFruits();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.getAge()} Report] Height = ${appleTree.getHeight() / 100} m | Fruits harvested = ${appleTree._harvested} (${appleTree._qualityCounts[0]} good, ${appleTree._qualityCounts[1]} bad)`);

// } while (appleTree.getHealthStatus() !== false);

// console.log(`The ${appleTree.getName()} tree has met its end.`);

// console.log('----------------------------------------------------------');

// console.log(`The ${pearTree.getName()} tree is alive!`);

// do {

//   pearTree.grow();
//   pearTree.produceFruits();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.getAge()} Report] Height = ${pearTree.getHeight() / 100} m | Fruits harvested = ${pearTree._harvested} (${pearTree._qualityCounts[0]} good, ${pearTree._qualityCounts[1]} bad)`);

// } while (pearTree.getHealthStatus() !== false);

// console.log(`The ${pearTree.getName()} tree has met its end.`);
