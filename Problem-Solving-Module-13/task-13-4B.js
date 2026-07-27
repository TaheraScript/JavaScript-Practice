/* Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
Input
Output
"hello"
"ell"


Starter Snippet:
// Input: a string
// Output: the string without its first and last character
// Returns: a string */
 
function removeFirstAndLast(str) {
  let string =str.slice(1,4);
 return string;
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"
