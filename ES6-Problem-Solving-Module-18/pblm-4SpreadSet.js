/*
  Problem 4: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/
let arr1 = [1,2,3]
let arr2 = [2,3,4]
let array =[...arr1,...arr2]

//removing duplicates using traditional way

// let newArray =[]
// for(i=0; i<array.length ;i++){
//   if(!newArray.includes(array[i]))
//     newArray.push(array[i]) 
// }

//removing duplicates using new Set

//let newArray =[...new Set(array)]
let newArray =Array.from(new Set(array))//also can use the upper code
console.log(newArray)