/*  It should return true if a string is empty, otherwise false.*/

 
function isEmpty(str) {
  if (str.length === 0) { 
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  
console.log(isEmpty("hi")); 
