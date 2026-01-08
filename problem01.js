// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:
// Input: "hello"
// Output: "olleh"

// Option 01. It's using javascript built-in methods.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Option 02. It's using a for loop.
function reverseString2(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString("hello"));
