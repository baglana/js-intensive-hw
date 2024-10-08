import { Calculator, CalculatorFn } from "./calculator.js";

export class SuperCalculator extends Calculator {
// export class SuperCalculator {
  logMul() {
    console.log(`Mul of ${this.x} and ${this.y} is ${this.x * this.y}`);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(`Div of ${this.x} and ${this.y} is ${this.x / this.y}`);
  }
}

// SuperCalculator.prototype.__proto__ = Calculator.prototype;
// SuperCalculator.__proto__ = Calculator;

Object.setPrototypeOf(SuperCalculator.prototype, Calculator.prototype);
Object.setPrototypeOf(SuperCalculator, Calculator);

export function SuperCalculatorFn(x, y) {
  CalculatorFn.call(this, x, y);
}

SuperCalculatorFn.prototype = {
  constructor: SuperCalculatorFn,
  logMul() {
    console.log(`Mul of ${this.x} and ${this.y} is ${this.x * this.y}`);
  },
  logDiv() {
    if (this.y === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(`Div of ${this.x} and ${this.y} is ${this.x / this.y}`);
  },
};

Object.setPrototypeOf(SuperCalculatorFn.prototype, CalculatorFn.prototype);
Object.setPrototypeOf(SuperCalculatorFn, CalculatorFn);
