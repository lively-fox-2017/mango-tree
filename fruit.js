"use strict"

class Fruit {
	constructor(name) {
		this._name = name;
		this._quality = ['good', 'bad'];
	}

	get quality() {
		return Math.random() > 0.3 ? this._quality[0] : this._quality[1];
	}
}

module.exports = Fruit;