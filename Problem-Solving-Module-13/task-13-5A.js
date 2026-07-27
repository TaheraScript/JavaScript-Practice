/* Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.
Input
Output
"level"
true
"hello"
false


Starter Snippet:
// Input: a string
// Output: true or false
// Returns: a boolean */
 
function isPalindrome(str) {
    let isReverseWord = '';
  for(i=str.length-1 ;i>=0 ;  i--){
    let letter = str[i];
    isReverseWord = isReverseWord + letter;
    //console.log(isReverseWord)
    if (isReverseWord === str){
        return true;
    }
    
  }
 
  return false;
}
 
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
