/* This function should return the count of numbers from 1 to n.  */

 
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n;i++) { // something is missing here
    //count = count + i;
    count++;
  }
 
  return count++;
}
 
console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)

