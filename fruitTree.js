"use strict"

class FruitTree {
	constructor(fruit, age , maxAge, height, maxHeight, heightModifier, matureAge, maxFruitProduction, healthyStatus = true) {
		this._fruit = fruit;
		this._maxAge = maxAge;
		this._age = age;
		this._maxHeight = maxHeight;
		this._heightMod = heightModifier;
		this._matureAge = matureAge;
		this._maxFruitProd = maxFruitProduction;
		this._height = height;
		this._healthyStatus = healthyStatus;

		this._isMature = false;
		this._fruits = 0;
		this._harvested = [];
	}

	get age() { 
		return this._age; 
	}

	get height() {
		return this._height;
	}

	get isDie() {
		return this.isDie;
	}

	grow() {
		const formatNum = float => Number(float.toFixed(2));
		const growth = formatNum(
							Math.random() * 
							(this._heightMod - (this._heightMod - 0.3)) + 
							(this._heightMod - 0.3)
						);

		this._age += 1;
		this._height += growth;

		if (this._age === this._maxAge) this._healthyStatus = false;
		if (this._age === this._matureAge) this._isMature = true;
		if (this._height >= this._maxHeight) this._height = this._maxHeight;
	}

	produce() {
		const prod = Math.random(Math.round() * (this._maxFruitProd - 1) + 1);

		this._fruits += prod;
	}

	harvest() {
		let harvested = {total: 0, good: 0, bad: 0};

		while (this._fruits > 0) {
			let quality = this._fruit.quality;

			if (quality === 'good') harvested.good += 1;
			else if (quality === 'bad') harvested.bad += 1;

			harvested.total += 1;
			this._fruits -= 1;
		}

		this._harvested.push(harvested);
	}
}

module.exports = FruitTree;