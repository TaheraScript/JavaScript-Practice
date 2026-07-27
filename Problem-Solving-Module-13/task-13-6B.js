// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3.
// Input
// Output
// [3, 4, 6, 7, 9, 10]
// 3


// Starter Snippet:
// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number
 
function countMultiplesOfThree(numbers) {
  let count = 0;
  for(i= 0; i<numbers.length ; i++){
    if(numbers[i] % 3 === 0){
        count =count +1;
    }
  }
 
  return count;
}
 
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3
