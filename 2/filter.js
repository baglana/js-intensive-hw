/*
  Write your own implementation of the built-in array function filter. Call the function myFilter and
  make it so that any array can use this function as a “native” one. It must take a callback function
  as parameters and an optional parameter as an object that will be used as this in internal calls to
  this callback function.
  Ultimately, your myFilter implementation should work exactly like the built-in filter method. The
  callback function passed as a parameter must also be called with the same parameters as the
  original (element, index, array).
*/

Array.prototype.myFilter = function (cbFn, thisArg) {
  console.log(thisArg);
  const filtered = [];

  this.forEach((val, ind, arr) => {
    if (cbFn.call(thisArg, val, ind, arr)) {
      filtered.push(val);
    }
  });

  return filtered;
};

const nums = [1, 2, 3];

const filtered = nums.myFilter(
  function (x, i, a) {
    console.log(this, this[i]);
    return this[i] > 1;
  },
  [1, 2]
);

console.log(filtered);
