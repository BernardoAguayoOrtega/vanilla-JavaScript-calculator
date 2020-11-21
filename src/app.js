class Calculator {
	constructor() {
		this.firstNumber = [];
		this.secondNumber = [];
		this.option = true;

		this.$screen = document.getElementById('screen');
		this.$calculator = document.querySelector('.calculator');

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
			this.pressSymbol(event);
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
		console.log(this.option)
	}

	addNumbersInsideFirstNumber(number) {
		this.firstNumber.push(number);
		this.$screen.innerText = this.firstNumber.join('');
	}

	addNumbersInsideSecondNumber(number) {
		this.secondNumber.push(number);
		this.$screen.innerText = this.firstNumber.join('');
	}

	pressSymbol(event) {
		event.stopPropagation();

		switch(event.target.id){
			case "divide": {
				this.option = false;
			}
		}
	}
}

const calculator = new Calculator();
