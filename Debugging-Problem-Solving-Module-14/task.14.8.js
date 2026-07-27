/* This function should return how many vowels are in a string. 
 */

 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i < str.length; i++) { 
    if (vowels.includes(str[i])) {
      count = count + 1
    }
  }
 
  return count;
}
 
console.log(countVowels("orange")); // Expected: 3
