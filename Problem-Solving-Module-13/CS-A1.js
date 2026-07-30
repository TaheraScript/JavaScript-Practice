/* Given an array of numbers, find both the largest AND smallest value using a single loop (no built-in Math.max/Math.min). 
● If the input is not an array, return "Invalid". 
● If any element of the array is not a number, return "Invalid". 
Expected Output: 
Numbers: [45, 12, 89, 3, 67] 
Largest: 89 
Smallest: 3 
Hints: 
1. Initialize both max and min to the first element 
2. Update them inside one loop as you compare each number 
 */
function findLargestAndSmallest(Numbers){

if(!Array.isArray(Numbers)){
    return 'invalid'
}
let largestNumber = Numbers[0]
let smallestNumber = Numbers[0]

for(i=0 ; i<Numbers.length ; i++){
    let currentNumber = Numbers[i]
    //console.log(currentNumber)
    if(typeof currentNumber !== 'number'){
        return 'invalid'
    }
  
    if(currentNumber>largestNumber){
        largestNumber = currentNumber;   
    }

    if (currentNumber < smallestNumber){
        smallestNumber = currentNumber 
    }
   
}
     return {
        largest :  largestNumber,
        Smallest : smallestNumber }
}
let Numbers= [45, 12, 89, 3, 67] 
let result = findLargestAndSmallest(Numbers);
console.log(result)
//console.log(findLargestAndSmallest("hello"))
//console.log('Largest',':',largestNumber)
//console.log('Smallest',':',smallestNumber)