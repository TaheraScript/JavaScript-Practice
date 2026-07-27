/* find the smallest number in an array */

//without function
// let arr = [890,67,45,23,785];
// let smallestNum=arr[0];
// for(i=1 ; i<arr.length ; i++){
//     let currentNum = arr[i];
//     console.log('the current element is',currentNum);
//     if(currentNum < smallestNum){
//         smallestNum= currentNum;
//     }   
// }
// console.log('the smallest number is',smallestNum);

//with function

function smallestNumber(arr){
    
let smallestNum=arr[0];
for(i=1 ; i<arr.length ; i++){
    let currentNum = arr[i];
    console.log('the current element is',currentNum);
    if(currentNum < smallestNum){
        smallestNum= currentNum;
    }   
}
return smallestNum;
}
let number = [890,67,45,23,785];
let output = smallestNumber(number);
console.log(output)