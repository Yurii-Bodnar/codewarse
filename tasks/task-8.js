// Task
// Write a function that takes an array containing numbers and functions. The output of the function should be an array of only numbers. So how are we to remove the functions from the array?

// All functions must be applied to the number before it prior to the function being discarded from the array. It is as if the functions are collapsing left in the array modifying the first number to the left of the function. The functions should apply in order of index in the array. After a function has been applied to the number before it, it should be "removed" from the array to allow any following functions to also modify that new number.

// Example
// [ 3, f(x) = x + 2, f(x) = x * 5, 4, f(x) = x - 1 ] => [ 25, 3 ]
// because

// [ (3 + 2) * 5, 4 - 1 ]
// Note how all functions collapsed into the closest number to the left; they did not produce new numbers into the array, but modified existing ones.

// Notes
// If a function comes first in the array, it should behave as if it were passed in 0:
// [ f(x) = x + 2, 4 ] => [0 + 2, 4]
// An empty array passed in must return an empty array.
// Functions will always take exactly one, number, parameter.
// If an array only contains numbers, the array should be returned without any modifications.

function operationArguments(arr) {
  if (arr.length === 0) {
    return arr;
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      res.push(arr[i]);
    }
    if (typeof arr[i] === "function" && i !== 0) {
      const newCount = arr[i](res[res.length - 1]);
      res.splice(res.length - 1, 1, newCount);
    }
    if (typeof arr[i] === "function" && i === 0) res.push(arr[i](0));
  }
  return res;
}

// console.log(operationArguments([n, f]));
