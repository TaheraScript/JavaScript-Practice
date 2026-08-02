//syntax of arrow function

// let variableName =()=>{
//     return "something"
// }

//single satatement
// let sayGreet = (name)=>{
//     return `Hello, ${name}.Good Morning`
// }
// console.log(sayGreet('Moyna'))

//single statement -implicit return
// let sayGreet = (name)=> `Hello, ${name}.Good Morning` //implicit return
// console.log(sayGreet('Moyna'))

//single statement-witout parenthisis
//  let sayGreet = name=> `Hello, ${name}.Good Morning` //parenthisis is optional for single statement
//  console.log(sayGreet('Moyna'))

//multiline statement
// let sumNumberThanMultiplyByThree = (a,b)=>{
//     const sum = a+b;
//     const multiply =sum *3
//     return multiply;

// }
//console.log(sumNumberThanMultiplyByThree(5,6))

//convert it into single statement
let sumNumberThanMultiplyByThree = (a,b) => (a+b)*3
console.log(sumNumberThanMultiplyByThree(5,6))