/* FizzBuzz ( 1 to N)
loop through numbers from 1 to N.if a number is divisible by 3 print "Fizz", divisible by 5 print "Buzz",if divisible by both print "FizzBuzz",otherwise print the number itself */

//withot function
// for(i=1 ; i<=15 ;i++){
//      if(i %3 === 0 && i% 5 === 0) {
//             console.log('FizzBuzz')
//     }
//     else if (i%5 === 0){
//         console.log('Buzz')
//     }
//      else if (i%3 === 0){
//         console.log('Fizz')
//         }
//         else{
//             console.log(i)
//         }
// }

//with function and Return
// function identifyNumbers(number){
//     let result = [];

//     for(i=1 ; i<=number ;i++){
//      if(i %3 === 0 && i% 5 === 0) {
//             result.push('FizzBuzz');
//     }
//     else if (i%5 === 0){
//         result.push('Buzz');
//     }
//      else if (i%3 === 0){
//         result.push('Fizz');
//         }else{
//             result.push(i) ;
//         }
        
// }
//     return result;
// }
// const output= identifyNumbers(25);
// console.log(output)

//with function and console.log(as in question mention that print the answer thats why need to use console.log)
function identifyNumbers(number){
    for(i=1 ; i<=number;i++){
     if(i %3 === 0 && i% 5 === 0) {
            console.log('FizzBuzz')
    }
    else if (i%5 === 0){
        console.log('Buzz')
    }
     else if (i%3 === 0){
        console.log('Fizz')
        }
        else{
            console.log(i)
        }
}
}
console.log(identifyNumbers(15))