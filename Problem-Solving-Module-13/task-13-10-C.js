/*  Write a function removeDuplicates that takes an array of numbers and returns a new array where each value appears only once, keeping the first occurrence.
 */
// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array

 //for of loop
function removeDuplicates(numbers) {
  let unique = [];
  for(number of numbers){
    if(!unique.includes(number)){
        unique.push(number)
    }
    
  }
  return unique;
}
 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]

//basic for loop
function removeDuplicates(numbers) {
  let unique = [];
  for(let i =0;i<numbers.length; i++){
    if(!unique.includes(numbers[i])){
        unique.push(numbers[i])
    }
    
  }
  return unique;
}
 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]
