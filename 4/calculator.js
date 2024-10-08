export class Calculator {
  _x;
  _y;
  static lastX = 'initX';
  static lastY = 'initY';

  constructor(x, y) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      x === Infinity ||
      x === -Infinity ||
      x === NaN ||
      y === Infinity ||
      y === -Infinity ||
      y === NaN
    ) {
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
    console.log(`Sum of ${Calculator.lastX} and ${Calculator.lastY} is ${Calculator.lastX + Calculator.lastY}`);
  }

  logSub() {
    console.log(`Sub of ${Calculator.lastX} and ${Calculator.lastY} is ${Calculator.lastX - Calculator.lastY}`);
  }
}

export function CalculatorFn(x, y) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      x === Infinity ||
      x === -Infinity ||
      x === NaN ||
      y === Infinity ||
      y === -Infinity ||
      y === NaN
    ) {
      throw new Error("At least one number is not valid");
    }
    this.setX(x);
    this.setY(y);
    CalculatorFn.lastX = 'initX';
    CalculatorFn.lastY = 'initY';
}
    
CalculatorFn.prototype = {
    constructor: CalculatorFn,
    get x() {
      return this._x;
    },
    get y() {
      return this._y;
    },
    setX(val) {
      Calculator.lastX = this._x = val;
      console.log(`Set x as ${this.x}`);
    },
    setY(val) {
      Calculator.lastY = this._y = val;
      console.log(`Set y as ${this.y}`);
    },
    logSum() {
      console.log(`Sum of ${Calculator.lastX} and ${Calculator.lastY} is ${Calculator.lastX + Calculator.lastY}`);
    },
    logSub() {
      console.log(`Sub of ${Calculator.lastX} and ${Calculator.lastY} is ${Calculator.lastX - Calculator.lastY}`);
    }
  }