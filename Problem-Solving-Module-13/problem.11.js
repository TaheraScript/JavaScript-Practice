/* sum and average of an array */

//without function 
// let array = [12,78,45,34,76];
// let sum =0;
// for(i=0 ; i<array.length ; i++){
//     let currentNumber = array[i];
//     console.log('current number is',currentNumber);
//     sum = sum + currentNumber;
    
//     average =sum/array.length  
// }
// console.log('sum is ',sum);
// console.log('average is',average);

//with function
function sumAndAverageOfArray(array){
    
let sum =0;
for(i=0 ; i<array.length ; i++){
    let currentNumber = array[i];
    console.log('current number is',currentNumber);
    sum = sum + currentNumber;
    
    average =sum/array.length  
}
return {sum , average};
// console.log('sum is ',sum);
// console.log('average is',average);

}
let arr = [12,78,45,34,76];
let output = sumAndAverageOfArray(arr)
console.log(output)