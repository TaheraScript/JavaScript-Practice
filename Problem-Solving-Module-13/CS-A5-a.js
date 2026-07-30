/*  Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) appear in a string, case-insensitive. 
● If the input is not a string, return "Invalid". 
Expected Output: 
countVowels('Hello World') → 3 
Hints: 
1. Lowercase the string first so case doesn't matter 
2. Loop through each character and check if it's in 'aeiou' using includes() 
 */

 function countVowels(str){
   if(typeof str !== 'string'){
      return 'invalid'
   }
    let vowels ='aeiou'
    let count = 0;
    for(i=0; i<str.length;i++){
       let letter= str[i];
       //console.log(letter)
        if(vowels.includes(letter)){
            count++
        }
    }
    return count;
 }
 let result = countVowels('hello world')
 console.log(result)
 console.log(countVowels(['hello world']))