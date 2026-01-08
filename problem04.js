// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:
// Input: [5, 1, 9, 3]
// Output: 9

function findMax(num) {
  let max = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }

  return max;
}

console.log(findMax([50, 5, 1, 9, 3, 30]));
