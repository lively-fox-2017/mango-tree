"use strict"

// release 2

class FruitTree {
  // Initialize a new FruitTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this.jumlahBuah = 0;
    this.healthyStatus = true;
    this._harvested = '';
  }

  getAge() {
    this._age++;
  }

  getHeight() {
    this._height += Math.floor(Math.random() * 2);
  }

  getFruits() {
    if (this._age <= 1) {
      this.jumlahBuah = 0;
    } else if (this._age > 1 && this._age <= 3) {
      this.jumlahBuah = (Math.floor(Math.random() * 50) + 1);
    } else if (this._age > 3 && this._age <= 10) {
      this.jumlahBuah = (Math.floor(Math.random() * 200) + 1);
    } else if (this._age > 10 && this._age <= 13) {
      this.jumlahBuah = (Math.floor(Math.random() * 50) + 1);
    } else if (this._age > 13) {
      this.jumlahBuah = 0;
    }
  }

  getHealtyStatus() {
    if (this._age > 14) {
      this.healthyStatus = false;
    }
  }

  // Get current states here
  // Grow the tree
  grow() {
    this.getAge();
    this.getHeight();
    this.getFruits();
    this.getHealtyStatus();
  }

  // Produce some fruits
  produceFruits() {
    this.getFruits();
  }

  // Get some fruits
  harvest() {
    let arr = [[],[]];
    for (let i = 0; i < this.jumlahBuah; i++) {
      arr[Math.floor(Math.random() * 2)].push(i);
    }
    this._harvested = '(' + arr[0].length + ' good, ' + arr[1].length + ' bad)';  
  }
}

class Fruit {
  constructor() {
    this.kualitas = kualitas;
  }
}

module.exports = FruitTree;