/* Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same).
 */
// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
 
function reverseWords(sentence) {
 let splitIt = sentence.split(' ');
 let reverseIt = splitIt.reverse(' ');
 let joinIt = reverseIt.join(' ');
 return joinIt;
 
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"
