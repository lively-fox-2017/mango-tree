"use strict"

// Release 2
class FruitTree {
	constructor(nama, umur, tinggi, umurPertamaBerbuah, sehat, fruit){
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
		this._tinggi += Math.ceil(Math.random()*5);
	}

	// Produce some mangoes
	produceFruit() {
		if(this._umur >= this._umurPertamaBerbuah){
			this._produksi = Math.floor(Math.random()*9)+2;
		}else{
			this._produksi = "Belom berbuah";
		}
		
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
	super("MangoTree", umur, tinggi, umurPertamaBerbuah, sehat, new Mango());
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
	super("AppleTree", umur, tinggi, umurPertamaBerbuah, sehat, new Apple());
  }
}

class Apple extends Fruit {
  constructor() {
	super();
  }
}

class PearTree extends FruitTree {
  constructor(umur, tinggi, umurPertamaBerbuah, sehat) {
	super("PearTree", umur, tinggi, umurPertamaBerbuah, sehat, new Pear());
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
		this._tree = [];
	}
	
	inputTree(nama, umur, tinggi, umurPertamaBerbuah, sehat){
		if(nama === "MangoTree"){
			return this._tree.push(new MangoTree(umur, tinggi, umurPertamaBerbuah, sehat));
		}else if(nama === "AppleTree"){
			return this._tree.push(new AppleTree(umur, tinggi, umurPertamaBerbuah, sehat));
		}else if(nama === "PearTree"){
			return this._tree.push(new PearTree(umur, tinggi, umurPertamaBerbuah, sehat));
		}else{
			return "Input tidak sesuai";
		}
	}
	
	show_ages(){
		for (let i = 0; i < this._tree.length; i++){
			console.log(this._tree[i]._nama+" berumur "+this._tree[i]._umur+" Tahun");
		}
		console.log("");
	}
	
	show_trees(){
		console.log(this._tree);
		console.log("-------------------------");
	}
	
	mature_trees(){
		let str = "";
		for (let i = 0; i < this._tree.length; i++){
			if(this._tree[i]._umur >= this._tree[i]._umurPertamaBerbuah){
				str += this._tree[i]._nama+" adalah pohon tua\n";
			}
		}
		
		if(str === ""){
			console.log("Belom ada pohon yang tua\n");
		}else{
			console.log(str);
		}
	}
	
	dead_trees(){
		let str = "";
		for (let i = 0; i < this._tree.length; i++){
			if(!this._tree[i]._sehat || this._tree[i]._umur > 20){
				str += this._tree[i]._nama+" Telah Mati\n";
			}
		}
		
		if(str === ""){
			console.log("Belom ada pohon yang mati\n");
		}else{
			console.log(str);
		}
	}
}

// let mangoTree = new MangoTree(0, 8, 7, true);
// let appletree = new AppleTree(0, 1.8, 7, true);
let treegrove = new TreeGrove();
treegrove.inputTree("MangoTree", 21, 1.2, 5, true);
treegrove.inputTree("PearTree", 7, 10, 7, true);
treegrove.show_trees();
treegrove.show_ages();
treegrove.dead_trees();
treegrove.mature_trees();
// console.log("The tree is alive! :smile:");

// while (mangoTree._sehat !== false) {
	// mangoTree.grow();
	// mangoTree.produceFruit();
	// mangoTree.harvest();
	// console.log("[ Year "+mangoTree._umur+" Report Height = "+mangoTree._tinggi+" M | Fruits harvested = "+mangoTree._produksi+" ("+mangoTree._kualitas[mangoTree._kualitas.length-1][0]+" good, "+mangoTree._kualitas[mangoTree._kualitas.length-1][1]+" bad)");
// }
// while (appletree._sehat !== false) {
	// appletree.grow();
	// appletree.produceFruit();
	// appletree.harvest();
	// console.log("[ Year "+appletree._umur+" Report Height = "+appletree._tinggi+" M | Fruits harvested = "+appletree._produksi+" ("+appletree._kualitas[appletree._kualitas.length-1][0]+" good, "+appletree._kualitas[appletree._kualitas.length-1][1]+" bad)");
// }

// console.log("The tree has met its end. :sad:");

