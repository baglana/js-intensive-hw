console.log("main.js");

import { Calculator, CalculatorFn } from "./calculator.js";
import { SuperCalculator, SuperCalculatorFn } from "./superCalculator.js";

console.log(SuperCalculatorFn.prototype)

// const calc1 = new CalculatorFn(2, 3);

// calc1.logSum();
// calc1.logSub();

// calc1.setX(4);
// calc1.setY(8);

// calc1.logSum();
// calc1.logSub();

const calc2 = new SuperCalculator(2, 3);

calc2.logSum();
calc2.logSub();

calc2.setX(4);
calc2.setY(8);

calc2.logSum();
calc2.logSub();
calc2.logMul();
calc2.logDiv();

const logSumRef = calc2.logSum;
logSumRef();
