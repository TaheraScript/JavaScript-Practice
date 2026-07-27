/* find the largest number in an array */

//without function
// let arr = [34,90,76,56,23];
// let largestNumber = arr[0]//assume the first number as the largest one ,to compare with other numbers
// for(i=1 ; i<=arr.length ; i++){
//     let currentElement = arr[i];
//     console.log(currentElement)
    
//     if (currentElement >largestNumbe ){
//         largestNumber=currentElement;//if any number will be greater than first number than it will be count as a largest number 
//     } 
// }
// console.log('the largest number is',largestNumber)

//with function

function largestNum(arr){
    
let largestNumber = arr[0]//assume the first number as the largest one ,to compare with other numbers
for(i=1 ; i<arr.length ; i++){
    let currentElement = arr[i];
    console.log(currentElement)
    
    if (currentElement >largestNumber ){
        largestNumber=currentElement;//if any number will be greater than first number than it will be count as the largest number .
    } 
}
return largestNumber;
}
let array = [34,90,76,56,23];
let output = largestNum(array);
console.log('the largest number is =',output)