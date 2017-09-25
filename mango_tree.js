"use strict"

// release 0

class MangoTree {

    // Initialize a new MangoTree
    constructor() {
        this._umur = 0
        this._tinggi = 0
        this._maxBuah = 0
        this._buahReady = 0
        this._jmlhBuah_panen = 0
        this._sehat = true

    }

    getAge() {
        return this._umur
    }
    getHeight() {
        return this._tinggi
    }
    getFruits() {
        return this._buah = this._jmlhBuah_panen
    }
    getHealtyStatus() {
        return this._sehat
    }


    // Get current states here

    // Grow the tree
    grow() {
        // let tahunMax = 20
        // for (let i = 1; i < tahunMax; i++) {
        //     this._umur += 1
        //     this._tinggi += (Math.random() * 0.5)
        //         // console.log(this._umur)
        //      if (this._umur < 20) {
        //          this._umur++
        //          this._tinggi += Math.random()
        //          this.produceMangoes()
        //          this.harvest()
        //          }
        //      if (this._umur === 20) {
        //          this._sehat = false
        //          return `pohon telah menua dan tidak berbuah lagi`
        //          }
        //     if (this._umur === tahunMax) {
        //         return `pohonnya mati & tidak berbuah lagi`
        //          } 
        // }
        // console.log(`grow() Log: Year ${this._umur}`)
        // console.log(`grow() Log: Height = ${this._tinggi.toFixed(1)}`)
        // return this._umur
        if (this._umur < 20) {
            this._umur++
                this._tinggi += Math.random()
            this.produceMangoes()
            this.harvest()
        }
        if (this._umur === 20) {
            this._sehat = false
            return `pohon telah menua dan tidak berbuah lagi`
        }
    }

    // Produce some mangoes
    produceMangoes() {
        //this._buahReady = Math.floor(Math.random() * 2 + 3)
    }

    // Get some fruits
    harvest() {
        this._jmlhBuah_panen += Math.floor(Math.random() * (13) + 3)
        this._qBaik = Math.floor(this._jmlhBuah_panen * Math.random()) + 1
        this._qTdkBaik = this._jmlhBuah_panen - this._qBaik
            //console.log(this._jmlhBuah_panen)
        return `${this._jmlhBuah_panen} ${this._qBaik} Good, ${this._qTdkBaik} Bad`
    }

}

class Mango {
    // Produce a mango
    constructor() {
        this._qBaik = 0
        this._qTdkBaik = 0
    }
}

/**
 * driver code untuk release 0
 * let mangoTree = new MangoTree()
 * do {
 *   mangoTree.grow();
 *   mangoTree.produceMangoes();
 *   mangoTree.harverst();
 *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
 * } while (mangoTree.healthyStatus != false)
 */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

var tree = new MangoTree()

let mangoTree = new MangoTree()

mangoTree.getAge()
mangoTree.getHeight()
mangoTree.getFruits()
mangoTree.getHealtyStatus()

//mangoTree.grow()
// mangoTree.harvest()
//console.log(mangoTree.grow())
console.log(mangoTree.harvest())
console.log(`The tree is alive! :smile:`)

do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree._umur} Report] Height= ${mangoTree._tinggi.toFixed(1)} m | Fruits harvested = ${mangoTree._jmlhBuah_panen}`)
} while (mangoTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)