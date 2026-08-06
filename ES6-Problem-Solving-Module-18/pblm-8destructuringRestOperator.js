/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/
//Swap two variables
let a = 2;
let b = 5;
[b,a] = [a,b];
console.log(a,b);

//extract first/rest elements from an array
let numbers = [10,20,30,40]
let [first,...rest] = numbers
 
console.log(`first=${first}, rest=${rest}`)
