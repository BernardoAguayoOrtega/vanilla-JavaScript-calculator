class Calculator {
	constructor() {
		this.firstNumber = [];
		this.secondNumber = [];
		this.option = true;
		this.operation = 0;

		this.$screen = document.querySelector('.screen');
		this.$calculator = document.querySelector('.calculator');

		this.$c = document.getElementById('c');
		this.$equal = document.getElementById('equal');

		this.addEventListeners();
	}

	addEventListeners() {
		this.$calculator.addEventListener('click', (event) => {
			this.pressNumber(event);
			this.pressSymbol(event);
			this.pressEqual(event);
			this.prestC(event);
		});
	}

	pressNumber(event) {
		event.stopPropagation();

		switch (event.target.id) {
			case 'one':
				return this.addNumberDependTheOption(1);
			case 'two':
				return this.addNumberDependTheOption(2);
			case 'three':
				return this.addNumberDependTheOption(3);
			case 'four':
				return this.addNumberDependTheOption(4);
			case 'five':
				return this.addNumberDependTheOption(5);
			case 'six':
				return this.addNumberDependTheOption(6);
			case 'seven':
				return this.addNumberDependTheOption(7);
			case 'eight':
				return this.addNumberDependTheOption(8);
			case 'nine':
				return this.addNumberDependTheOption(9);
			case 'zero':
				return this.addNumberDependTheOption(0);
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
		this.secondNumber.push(number);
		this.$screen.innerText = this.secondNumber.join('');
	}

	pressSymbol(event) {
		event.stopPropagation();

		switch (event.target.id) {
			case 'divide':
				return this.selectOperator(0);
			case 'sum':
				return this.selectOperator(1);
			case 'multi':
				return this.selectOperator(2);
			case 'minus':
				return this.selectOperator(3);
		}
	}

	selectOperator(operator) {
		this.option = false;
		this.operation = operator;
	}

	pressEqual(event) {
		event.stopPropagation();

		if (
			event.target.matches('#equal') &&
			this.firstNumber.length > 0 &&
			this.secondNumber.length > 0
		) {
			this.$screen.innerText = this.doOperation();
			this.reset();
		}
	}

	doOperation() {
		switch (this.operation) {
			case 0:
				return Math.floor(
					parseInt(this.firstNumber.join('')) /
						parseInt(this.secondNumber.join('')),
				);
			case 1:
				return Math.floor(
					parseInt(this.firstNumber.join('')) +
						parseInt(this.secondNumber.join('')),
				);
			case 2:
				return Math.floor(
					parseInt(this.firstNumber.join('')) *
						parseInt(this.secondNumber.join('')),
				);
			case 3:
				return Math.floor(
					parseInt(this.firstNumber.join('')) -
						parseInt(this.secondNumber.join('')),
				);
		}
	}

	reset() {
		this.option = true;
		this.firstNumber = [];
		this.secondNumber = [];
	}

	prestC(event) {
		event.stopPropagation();

		if (event.target.matches('#C')) {
			this.reset();
			this.$screen.innerText = '';
		}
	}
}

const calculator = new Calculator();
