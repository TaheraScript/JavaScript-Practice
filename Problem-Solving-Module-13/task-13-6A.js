/* Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.
Input
Output
[10, 5, 8, 20, 15]
8


Starter Snippet:
// Input: an array of numbers
// Output: the second smallest number
// Returns: a number */
 
function findSecondSmallest(numbers) {
  let smallest = numbers[0];
  let secondSmallest = numbers[0];
  for(i=1 ; i<numbers.length ;i++){
    let number = numbers[i]
    if(smallest > number){
        smallest = number;
        if(smallest<secondSmallest && secondSmallest<number)
            console.log('p')
    }
    //if()
  }
 
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
