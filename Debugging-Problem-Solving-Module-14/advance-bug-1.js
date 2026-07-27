/* should join words with ", ",uppercase them, split back into an array,then return that array */

function getUpperCaseWords(words){

    return words.join(", ").toUpperCase().split(",");
}
let result = getUpperCaseWords(["javascript" , "debugging"]);
console.log(result)