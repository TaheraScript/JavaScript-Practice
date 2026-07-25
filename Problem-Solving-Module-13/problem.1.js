/* check if a number is even or odd */

//without function

// let number = 45;
// if(number%2 === 0){
//     console.log('the number is even')
// }
// else {
//     console.log('the number is odd')
// }

/* with function */

function identifyNumber(a){
    if(a%2 === 0){
    return 'the number is even';
}
else {
    return 'the number is odd';
}
}
let result = identifyNumber(9);
console.log(result)