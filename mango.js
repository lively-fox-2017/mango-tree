"use strict"
const Fruit = require('./fruit.js');

class Mango extends Fruit {
	constructor() {
		super('Mango');
	}
}

module.exports = Mango;