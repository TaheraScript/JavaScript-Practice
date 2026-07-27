/* filter numbers greater than a value */

//without function

// let array = [23,89,45,200];
// let value = 40;
// let filteredInArray = [];
// for( i=0 ; i<array.length ; i++){
//     let currentNumber= array[i];
//     console.log(currentNumber)
//     if(currentNumber > value){
//         console.log(currentNumber,'is greater than the value')
//  filteredInArray.push(currentNumber);
//  console.log(filteredInArray)
//     }
// }

//with function
function largestNumber(array,value){
let filteredInArray = [];

for( i=0 ; i<array.length ; i++){
    let currentNumber= array[i];
    console.log(currentNumber)
    if(currentNumber > value){
        console.log(currentNumber,'is greater than the value')
       filteredInArray.push(currentNumber);

    }
     
}
return filteredInArray;
}
let value = 40;
let arr = [23,89,45,200];
let output = largestNumber(arr,value)
console.log(output)