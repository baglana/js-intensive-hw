"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
exports.CalculatorFn = CalculatorFn;
class Calculator {
    constructor(x, y) {
        if (typeof x !== "number" ||
            typeof y !== "number" ||
            x === Infinity ||
            x === -Infinity ||
            y === Infinity ||
            y === -Infinity) {
            throw new Error("At least one number is not valid");
        }
        this.setX(x);
        this.setY(y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    setX(val) {
        Calculator.lastX = this._x = val;
        console.log(`Set x as ${this.x}`);
    }
    setY(val) {
        Calculator.lastY = this._y = val;
        console.log(`Set y as ${this.y}`);
    }
    logSum() {
        if (typeof Calculator.lastX !== 'number' || typeof Calculator.lastY !== 'number') {
            return;
        }
        console.log(`Sum of ${Calculator.lastX} and ${Calculator.lastY} is ${Calculator.lastX + Calculator.lastY}`);
    }
    logSub() {
        if (typeof Calculator.lastX !== 'number' || typeof Calculator.lastY !== 'number') {
            return;
        }
        console.log(`Sub of ${Calculator.lastX} and ${Calculator.lastY} is ${Calculator.lastX - Calculator.lastY}`);
    }
}
exports.Calculator = Calculator;
Calculator.lastX = 'initX';
Calculator.lastY = 'initY';
function CalculatorFn(x, y) {
    if (typeof x !== "number" ||
        typeof y !== "number" ||
        x === Infinity ||
        x === -Infinity ||
        y === Infinity ||
        y === -Infinity) {
        throw new Error("At least one number is not valid");
    }
    this.setX(x);
    this.setY(y);
}
CalculatorFn.lastX = 0;
CalculatorFn.lastY = 0;
CalculatorFn.prototype = {
    constructor: CalculatorFn,
    get x() {
        return this._x;
    },
    get y() {
        return this._y;
    },
    setX(val) {
        CalculatorFn.lastX = this._x = val;
        console.log(`Set x as ${this.x}`);
    },
    setY(val) {
        CalculatorFn.lastY = this._y = val;
        console.log(`Set y as ${this.y}`);
    },
    logSum() {
        console.log(`Sum of ${CalculatorFn.lastX} and ${CalculatorFn.lastY} is ${CalculatorFn.lastX + CalculatorFn.lastY}`);
    },
    logSub() {
        console.log(`Sub of ${CalculatorFn.lastX} and ${CalculatorFn.lastY} is ${CalculatorFn.lastX - CalculatorFn.lastY}`);
    }
};
