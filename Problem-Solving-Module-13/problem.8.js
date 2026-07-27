/* count words in a sentence */

//without function
// let sentence = 'I Love My Country';
// let splitIt = sentence.split(' ');//splitted the sentence by space
// console.log(splitIt) 
// console.log(splitIt.length)//counted the splitted part

//with function
function countWords(sentence){
    
let splitIt = sentence.split(' ');//splitted the sentence by space
console.log(splitIt) 
let output =splitIt.length;//counted the splitted part
return output;

}
let result = countWords('I Love My Country');
console.log(result)