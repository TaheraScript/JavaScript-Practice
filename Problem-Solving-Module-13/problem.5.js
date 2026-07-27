/* reverse a string */

//without function
// let word = 'programming';
// let  reverseWord = '';
// for(i=word.length-1 ;i>=0 ; i-- ){
//     let letter = word[i];
//     console.log(letter)
//     reverseWord=reverseWord + letter;
    
// }
// console.log( 'reverseWord is', reverseWord)

//with function
function reverseTheWord(aWord){
   
let  reverseWord = '';
for(i=aWord.length-1 ;i>=0 ; i-- ){
    let letter = aWord[i];
    
    reverseWord += letter;   
}
    return reverseWord;
}
 let word = 'programming';
 let output = reverseTheWord(word)
 console.log( 'reverseWord is',output)