// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:
// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized =
      word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world, i am here"));
console.log(capitalizeWords("Programming is fun, and the programming hero is the boss to present coding as like fun"));