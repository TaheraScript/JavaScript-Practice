/* return all even numbers and their sum */

//without function

// let array = [89,45,64,23,46];
// let sum=0;
// let evenNumbers= [];//to see even numbers in array

// for (i=0 ; i<array.length ; i++){
//     let currentNumber = array[i];
 
//     if(currentNumber%2 === 0){
//         // console.log(currentNumber);
//         sum=sum+ currentNumber;
//         evenNumbers.push(currentNumber);//to push even numbers in array
//     }
    
// }
//  console.log('sum of even numbers',sum)
//   console.log('even numbers are ',evenNumbers)


  //with function
//function for even numbers
  function returnAndSumEvenNumbers(array){
    let sum=0;
let evenNumbers= [];//to see even numbers in array

for (i=0 ; i<array.length ; i++){
    let currentNumber = array[i];
 
    if(currentNumber%2 === 0){
        // console.log(currentNumber);
        evenNumbers.push(currentNumber);//to push even numbers in array
    }
}
 return evenNumbers;
  }

  let arr = [89,45,64,23,46];
let output = returnAndSumEvenNumbers(arr);
console.log('even numbers',output)

//function for sum
  function getSum(array){
    let sum=0;
let evenNumbers= [];//to see even numbers in array

for (i=0 ; i<array.length ; i++){
    let currentNumber = array[i];
 
    if(currentNumber%2 === 0){
        // console.log(currentNumber);
        sum=sum+currentNumber;
    }
}
return sum;
}
let result = getSum(arr)
console.log('sum of even numbers',result)





 