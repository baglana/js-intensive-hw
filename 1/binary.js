// Transform a number into a binary form.

// Optionally:
// *output the number by any method
// *receive a number from user by any input method.

const prompt = require('prompt-sync')();

const str = prompt("Please enter number ");

console.log((str >>> 0).toString(2));