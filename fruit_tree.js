class FruitTree {
  constructor(){
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._healthyStatus = true;
    this._harvested = '';
  }

  getAge() {
    this._age++
  }

  grow() {
    this.getAge()
    this.getHeight()
    this.getHealtyStatus()
  }

  // Produce some mangoes
  produceFruit() {
    this.getFruits()
  }

  // Get some fruits
  harvest() {
    let fruits = [[],[]]
    for (var i = 0; i < this._fruits; i++) {
      let random = Math.round(Math.random() * 1)
      fruits[random].push(i)
    }
    this._harvested = '('+fruits[0].length+' good, '+fruits[1].length+' bad)'
  }
}

class Fruit {}

module.exports = {
  FruitTree
}
