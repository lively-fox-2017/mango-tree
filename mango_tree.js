"use strict"

// Release 2
class FruitTree {
	constructor(fruit, nama, umur, tinggi, umurPertamaBerbuah, sehat){
		this._fruit = fruit;
		this._nama = nama;
		this._umur = umur;
		this._tinggi = tinggi;
		this._umurPertamaBerbuah = umurPertamaBerbuah;
		this._sehat = sehat;
		this._produksi = null;
		this._kualitas = [];
	}
	
	// getAge() {
		// return this._umur;
	// }
	  
	// getHeight() {
		// return this._tinggi;
	// }
	  
	// getFruits() {
		// return this._maxBuah;
	// }
	  
	// getHealtyStatus() {
		// return this._sehat;
	// }
	  
	// Grow the tree
	grow() {
		let maxUmur = 20;
		if(this._umur === maxUmur){
			this._sehat = false;
		}
		
		this._umur++;
		this._tinggi += Math.ceil(Math.random()*10);
	}

	// Produce some mangoes
	produceFruit() {
		this._produksi = Math.floor(Math.random()*9)+2;
		
		return this._produksi;
	}

	// Get some fruits
	harvest() {
		let baik = 0;
		let buruk = 0;
		for (let i = 0; i < this._produksi; i++){
			let kualitasBuah = this._fruit.kualitas;
			if(kualitasBuah === "good"){
				baik++;
			}else{
				buruk++;
			}
		}
		
		return this._kualitas.push([baik, buruk]);
	}
}

class Fruit {
	constructor(){
		this._good = "good";
		this._bad = "bad";
	}
	
	get kualitas(){
		let panen = Math.floor(Math.random()*2);
		
		if(panen === 0){
			return this._good;
		}else{
			return this._bad;
		}
	}
}

// release 0
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(umur, tinggi, umurPertamaBerbuah, sehat) {
	super(new Mango(), "MangoTree", umur, tinggi, umurPertamaBerbuah, sehat);
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
	super();
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._jumlahBuah}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree extends FruitTree {
  constructor(umur, tinggi, umurPertamaBerbuah, sehat) {
	super(new Apple(), "AppleTree", umur, tinggi, umurPertamaBerbuah, sehat);
  }
}

class Apple extends Fruit {
  constructor() {
	super();
  }
}

class PearTree extends FruitTree {
  constructor(umur, tinggi, umurPertamaBerbuah, sehat) {
	super(new Apple(), "AppleTree", umur, tinggi, umurPertamaBerbuah, sehat);
  }
}

class Pear extends Fruit {
  constructor() {
	super();
  }
}

// Release 3
class TreeGrove {
	constructor(){
	}
	
	inputTree(nama, umur, tinggi, umurPertamaBerbuah, sehat){
		
	}
	
	show_ages(){
	}
	
	show_trees(){
	}
	
	mature_trees(){
	}
	
	dead_trees(){
	}
}

// let mangoTree = new MangoTree(0, 8, 7, true);
let appletree = new AppleTree(0, 8, 7, true);
console.log("The tree is alive! :smile:");

// while (mangoTree._sehat !== false) {
	// mangoTree.grow();
	// mangoTree.produceFruit();
	// mangoTree.harvest();
	// console.log("[ Year "+mangoTree._umur+" Report Height = "+mangoTree._tinggi+" | Fruits harvested = `"+mangoTree._produksi+" ("+mangoTree._kualitas[mangoTree._kualitas.length-1][0]+" good, "+mangoTree._kualitas[mangoTree._kualitas.length-1][1]+" bad)");
// }
while (appletree._sehat !== false) {
	appletree.grow();
	appletree.produceFruit();
	appletree.harvest();
	console.log("[ Year "+appletree._umur+" Report Height = "+appletree._tinggi+" | Fruits harvested = `"+appletree._produksi+" ("+appletree._kualitas[appletree._kualitas.length-1][0]+" good, "+appletree._kualitas[appletree._kualitas.length-1][1]+" bad)");
}

console.log("The tree has met its end. :sad:");

