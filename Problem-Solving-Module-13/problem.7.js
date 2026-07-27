/* check if a string is palindrome or not */

//without function
// let str = 'civic';
// let reverseWord='';

// for( i=str.length-1 ;i>=0; i--){
//     let letter =str[i];
//     console.log('letter is' , letter)
//     reverseWord = reverseWord + letter;
//     if (reverseWord === str){
//         console.log('it is a palindrome')
//     }
//     else{
//         console.log('not palindrome')
//     }

// }
// console.log('reverse word is',reverseWord)

//with function
function reverseTheWord(str){
    let reverseWord='';

for( i=str.length-1 ;i>=0; i--){
    let letter =str[i];
    console.log('letter is' , letter)
    reverseWord = reverseWord + letter;
     console.log('the reverse word is =>',reverseWord)
    if (reverseWord === str){
        return 'it is a palindrome';
    }
    else{
        console.log('not palindrome')
    }  
}
}
let output =  reverseTheWord('civic');
console.log(output)
let result = reverseTheWord('madam')
console.log(result)
console.log(reverseTheWord('programming'))
