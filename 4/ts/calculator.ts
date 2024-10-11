export class Calculator {
  private _x: number | undefined;
  private _y: number | undefined;
  static lastX: number | 'initX' = 'initX';
  static lastY: number | 'initY' = 'initY';

  constructor(x: number, y: number) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      x === Infinity ||
      x === -Infinity ||
      y === Infinity ||
      y === -Infinity
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

  setX(val: number) {
    Calculator.lastX = this._x = val;
    console.log(`Set x as ${this.x}`);
  }

  setY(val: number) {
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

export interface Calc {
  constructor(x: number, y: number): void;
  _x: number;
  _y: number;
  setX(val: number): void;
  setY(val: number): void;
  logSum(): void;
  logSub(): void;
}

export function CalculatorFn(this: Calc, x: number, y: number) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      x === Infinity ||
      x === -Infinity ||
      y === Infinity ||
      y === -Infinity
    ) {
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
    setX(val: number) {
      CalculatorFn.lastX = this._x = val;
      console.log(`Set x as ${this.x}`);
    },
    setY(val: number) {
      CalculatorFn.lastY = this._y = val;
      console.log(`Set y as ${this.y}`);
    },
    logSum() {
      console.log(`Sum of ${CalculatorFn.lastX} and ${CalculatorFn.lastY} is ${CalculatorFn.lastX + CalculatorFn.lastY}`);
    },
    logSub() {
      console.log(`Sub of ${CalculatorFn.lastX} and ${CalculatorFn.lastY} is ${CalculatorFn.lastX - CalculatorFn.lastY}`);
    }
  }