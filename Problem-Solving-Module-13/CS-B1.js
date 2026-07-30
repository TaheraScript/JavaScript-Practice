/* Write a function sumDigits(num) that adds up all the individual digits of a number. 
● If the input is not a number, return "Invalid".
Expected Output: 
sumDigits(1234) → 10 (1+2+3+4) 
Hints: 
1. Use % 10 to get the last digit, then Math.floor(num / 10) to remove it 2. Repeat in a while loop until num becomes 0 
 */

function sumDigits(num){
    if(typeof num !== 'number'){
        return "Invalid"
    }
    let sumOfDigits = 0;
  
    while(num > 0){
       
        let lastDigit = num % 10 //to get the last digit
        sumOfDigits += lastDigit
        //console.log(sumOfDigits)
      num =Math.floor(num / 10) //to remove the last digit of num and overwriting it as new value ,without previous last digit
        console.log(num)
    }
}
console.log(sumDigits(12345))


