// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates([10, 20, 10, 30, 20, 40]));

