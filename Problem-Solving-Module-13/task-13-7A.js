/* Write a function averageOfArray that takes an array of numbers and returns their average.
 */
// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {
  let total = 0;
 for(number of numbers){
    // console.log(number)
    total +=number;
    //console.log(total)
    average =total /numbers.length;

 }
 
  return average;
}
 
console.log(averageOfArray([2, 4, 6])); // Expected: 4
