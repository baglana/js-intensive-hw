"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperCalculator = void 0;
exports.SuperCalculatorFn = SuperCalculatorFn;
const calculator_js_1 = require("./calculator.js");
class SuperCalculator extends calculator_js_1.Calculator {
    // export class SuperCalculator {
    logMul() {
        if (this.x && this.y) {
            console.log(`Mul of ${this.x} and ${this.y} is ${this.x * this.y}`);
        }
    }
    logDiv() {
        if (this.y === 0) {
            throw new Error("Cannot divide by zero");
        }
        if (this.x && this.y) {
            console.log(`Div of ${this.x} and ${this.y} is ${this.x / this.y}`);
        }
    }
}
exports.SuperCalculator = SuperCalculator;
// SuperCalculator.prototype.__proto__ = Calculator.prototype;
// SuperCalculator.__proto__ = Calculator;
Object.setPrototypeOf(SuperCalculator.prototype, calculator_js_1.Calculator.prototype);
Object.setPrototypeOf(SuperCalculator, calculator_js_1.Calculator);
function SuperCalculatorFn(x, y) {
    calculator_js_1.CalculatorFn.call(this, x, y);
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
Object.setPrototypeOf(SuperCalculatorFn.prototype, calculator_js_1.CalculatorFn.prototype);
// Object.setPrototypeOf(SuperCalculatorFn, CalculatorFn);
