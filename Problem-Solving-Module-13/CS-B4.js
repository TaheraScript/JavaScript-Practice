/* Write a function secondLargest(arr) that finds the second largest number in an array WITHOUT using sort(). 
● If the input is not an array, return "Invalid". 
● If any element is not a number, return "Invalid". 
Expected Output: 
secondLargest([45, 12, 89, 3, 67]) → 67 
Hints: 
1. Track both the largest AND second largest as you loop 
2. When you find a new largest, the old largest becomes the new second largest 
 */
function secondLargest(arr){
    let largestNumber = Infinity;
    let secondLargestNumber = Infinity ;
    for(i=0 ; i<arr.length ; i++){
        let currentNumber = arr[i]
        //console.log(currentNumber)
        if( currentNumber > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = currentNumber;
           console.log(largestNumber)
            
           
        }
        if (currentNumber < secondLargestNumber && currentNumber > largestNumber)
            secondLargestNumber = currentNumber;
        
        
    } 
    //console.log(secondLargestNumber)
    
}
console.log(secondLargest([45, 12, 89, 3, 67]))