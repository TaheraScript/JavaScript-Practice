//make a new array whichs numbers are double of given array

//traditional way
// let arr =[4,7,2,9]
// let double =[]
// for(i=0 ;i< arr.length ; i++){
//     double.push(arr[i]*2)
// }
// console.log(double)

//map method - returns output on array
// let arrays =[4,7,2,9]
// let double = arrays.map(function(array){//array--> elements of every index,what we get by for of loop
// //console.log(array)
// return array*2
// })
// console.log(double)

//map method using one line arrow function
let arrays =[4,7,2,9]
let double = arrays.map(array=>array*2)
console.log(double)