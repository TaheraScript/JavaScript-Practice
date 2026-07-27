/*  Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.
 */
// Input: a number
// Output: true or false
// Returns: a boolean
 
function isPerfectSquare(num) {
  let squareRoot = Math.sqrt(num);
 // console.log(squareRoot)
  if (Number.isInteger(squareRoot)) {
    console.log(true);
  }
  else{
     console.log(false) ;
  }
 
 
}
 
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false
