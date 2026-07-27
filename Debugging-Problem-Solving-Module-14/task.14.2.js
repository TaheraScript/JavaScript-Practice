/* This function should return "Pass" if a score is 50 or above, otherwise "Fail".. */

 
function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); 
console.log(checkScore(40)); 
