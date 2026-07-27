/* factorial of a number */

function factorialNumber(number){

let factorial = 1;
for(i=1 ; i<=number; i++){
    factorial = factorial*i;
    console.log(i)
}
return factorial;
}
let result = factorialNumber(5);
console.log(result);