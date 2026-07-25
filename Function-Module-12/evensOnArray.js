/* put even numbers on an array */

function allEvenNumbers(array){
    let evenNumbers = [];
    for(number of array){
        if(number%2 === 0){
            console.log('this is a even number',number)
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
const numbers = [23,90,67,34,57];
const result = allEvenNumbers(numbers);
console.log('finally even numbers on array',result)


