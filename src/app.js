class Calculator {
	constructor() {
		this.$zero = document.getElementById('zero');
		this.$one = document.getElementById('one');
		this.$two = document.getElementById('two');
		this.$three = document.getElementById('three');
		this.$four = document.getElementById('four');
		this.$five = document.getElementById('five');
		this.$six = document.getElementById('six');
		this.$seven = document.getElementById('seven');
		this.$eight = document.getElementById('eight');
		this.$nine = document.getElementById('nine');

		this.$multi = document.getElementById('multi')
		this.$divide = document.getElementById('divide')
		this.$sum = document.getElementById('sum')
		this.$minus = document.getElementById('minus')
		this.$c = document.getElementById('c')
		this.$equal = document.getElementById('equal')
	}
}

const calculator = new Calculator();
