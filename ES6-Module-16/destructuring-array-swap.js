//destruction in array
let numbers =[34,21,96,56]
const [number1, , ,number4] = numbers

console.log(number1,number4)//34 56

//swap by destructuring

let a = 5;
let b = 10;
[b,a] = [a,b];
console.log(a,b);