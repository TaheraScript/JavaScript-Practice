/* sum of a range of numbers 1to N */
function sumNumbers(number){

let sum = 0;
for(i = 1; i <=number ; i++){
    sum = sum + i;
}
return sum;
}
let result = sumNumbers(8)
console.log(result)