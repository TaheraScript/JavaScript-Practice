/* Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.
Input
Output
123
6  (1 × 2 × 3)
4040
0 


Starter Snippet:
// Input: a number
// Output: product of its digits
// Returns: a number
*/
 
function productOfDigits(num) {
  let str = num.toString();
//   console.log(str)
  let total = 1;
  for(let number of str){
    //console.log(number)
    total = total *number;
  }
 
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0
