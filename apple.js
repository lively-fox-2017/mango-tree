"use strict"
const Fruit = require('./fruit.js');

class Apple extends Fruit {
	constructor() {
		super('Apple');
	}
}

module.exports = Apple;