// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }

  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
