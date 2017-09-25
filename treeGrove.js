"use strict"
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./appleTree.js');
const PearTree = require('./pearTree.js');
const Mango = require('./mango.js');
const Apple = require('./apple.js');
const Pear = require('./pear.js');

class TreeGrove {
	constructor() {
		this._trees = [];
	}

	inputTree(treeName, treeObj) {
		let name = treeName;
		treeObj._treeName = name;
		this._trees.push(treeObj);
	}

	nextYear() {
		this._trees.map(tree => {
			tree.grow()
		});
	}

	showAges() {
		this._trees.forEach(tree => {
			tree.age > 1 ? console.log(tree._treeName + ': ' + tree._age + ' years')
						: console.log(tree._treeName + ': ' + tree._age + ' year');
		});
	}

	showTrees() {
		return this._trees;
	}

	matureTrees() {
		return this._trees.filter(tree => tree._age >= tree._matureAge);
	}

	deadTrees() {
		return this._trees.filter(tree => tree._isDie);
	}
}

let grove = new TreeGrove();

// input trees data
grove.inputTree('Mango Tree One', new MangoTree(2, 0.5, 4, true));
grove.inputTree('Mango Tree Two', new MangoTree(3, 1.8, 4, true));
grove.inputTree('Apple Tree One', new AppleTree(4, 1.6, 5, true));
grove.inputTree('Apple Tree Two', new AppleTree(1, 0.3, 3, true));
grove.inputTree('Pear Tree One', new PearTree(5, 2.2, 5, true));
grove.inputTree('Pear Tree Two', new PearTree(2, 0.6, 4, true));

// next year
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();

// show trees age
grove.showAges();

// show trees
console.log(grove.showTrees());

// show mature trees
console.log(grove.matureTrees());

// show dead trees
console.log(grove.deadTrees());










