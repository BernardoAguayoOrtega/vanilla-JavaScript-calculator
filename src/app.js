class Calculator {
	constructor() {
		this.firstNumber = [];
		this.secondNumber = [];
		this.option = true;

		this.$screen = document.getElementById('screen');
		this.$calculator = document.querySelector('.calculator');

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

		this.$multi = document.getElementById('multi');
		this.$divide = document.getElementById('divide');
		this.$sum = document.getElementById('sum');
		this.$minus = document.getElementById('minus');
		this.$c = document.getElementById('c');
		this.$equal = document.getElementById('equal');

		this.addEventListeners();
	}

	addEventListeners() {
		this.$calculator.addEventListener('click', (event) => {
			this.pressNumber(event);
		});
	}

	pressNumber(event) {
		event.stopPropagation();

		if (event.target.matches('#one')) {
			this.addNumberDependTheOption(1);
		} else if (event.target.matches('#two')) {
			this.option;
			this.addNumberDependTheOption(2);
		} else if (event.target.matches('#three')) {
			this.addNumberDependTheOption(3);
		} else if (event.target.matches('#four')) {
			this.option;
			this.addNumberDependTheOption(4);
		} else if (event.target.matches('#five')) {
			this.addNumberDependTheOption(5);
		} else if (event.target.matches('#six')) {
			this.option;
			this.addNumberDependTheOption(6);
		} else if (event.target.matches('#seven')) {
			this.addNumberDependTheOption(7);
		} else if (event.target.matches('#eight')) {
			this.addNumberDependTheOption(8);
		} else if (event.target.matches('#nine')) {
			this.addNumberDependTheOption(9);
		} else if (event.target.matches('#zero')) {
			this.addNumberDependTheOption(0);
		}
	}

	addNumberDependTheOption(number) {
		this.option
			? this.addNumbersInsideFirstNumber(number)
			: this.addNumbersInsideSecondNumber(number);
	}

	addNumbersInsideFirstNumber(number) {
		this.firstNumber.push(number);
		this.$screen.innerText = this.firstNumber.join('');
	}

	addNumbersInsideSecondNumber(number) {
		this.firstNumber.push(number);
		this.$screen.innerText = this.firstNumber.join('');
	}
}

const calculator = new Calculator();
