// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false


function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));
