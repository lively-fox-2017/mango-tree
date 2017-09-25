"use strict"

class FruitTree {
    constructor() {
        this._age = 0;
        this._height = 0;
        this.status = true;
        this._harvested = 0;
        this.jumlah = 0;

    }

    getAge(){
        this._age+=1;
    }
    getHeight(){
        this._height += Math.floor(Math.random()*10)/10;
    }

    getFruits(){
        this.jumlah = Math.floor(Math.random()*10)+1;
    }

    getStatus(){
        if(this._age > 25){
            this.status = false;
        }
    }
    grow() {
        this.getAge();
        this.getHeight();
        this.getStatus();
    }
    produceFruit() {
        this.getFruits();
    }
    harvest() {
        let arr =[[],[]]
        let index =Math.floor(Math.random()*2);
        for(let i=0; i< this.jumlah; i++){
            arr[index].push(i);
        }
        this._harvested = '(' + arr[0].length + ' good ' + arr[1].length + ' bad) ';
    }
    
}

module.exports = FruitTree;
