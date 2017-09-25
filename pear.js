"use strict"
const Fruit = require('./fruit.js');

class Pear extends Fruit {
	constructor() {
		super('Pear');
	}
}

module.exports = Pear;