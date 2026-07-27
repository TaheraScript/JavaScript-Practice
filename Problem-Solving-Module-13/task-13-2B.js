/* Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. 
Starter Snippet:
// Input: a number
// Output: the number with digits reversed
// Returns: a number  */
 
/* with split,reverse.join */

function reverseNumber(num) {
  let str = num.toString();
  //console.log(str);
  let splitIt = str.split('');
  //console.log(splitIt)
  let reverseIt =splitIt.reverse('');
  // console.log(reverseIt)
  let joinIt = reverseIt.join('')
  return joinIt;
 
}
 
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7

/* with for of */
function reverseNumber(num) {
  let reverseNum ='';
   let str = num.toString();
//  console.log(str);
  for(number of str){
    // console.log(number)
    reverseNum= number + reverseNum;
    
  }
return reverseNum;
}
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7