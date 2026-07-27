/* Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).
Input
Output
10
[1, 3, 5, 7, 9]


Starter Snippet:
// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
 */
 
function getOddNumbers(n) {
  let odds = [];
  for(i=0; i<=n ; i++){
    if (i % 2 === 1){
       //console.log(i)
        odds.push(i);
    }
  }
 
   return odds;
}
 
console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]
