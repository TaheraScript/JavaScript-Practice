
/*
  Problem 6: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/
//traditional way
// let getGrade = (marks) =>{
//     if(typeof marks !== 'number'){
//         return 'Invalid'
//     }
//     if (marks >=90){
//         return 'A+'
//     }
//     else if(marks >=80){
//         return 'A'
//     }
//     else if(marks >=60){
//         return 'B'
//     }
//     else {
//        return 'Fail'
//     }
// }

//ternary operator
return typeof marks !== 'number'? 'Invalid':marks >= 90? 'A+':marks >= 80? 'A':marks >= 60? 'B' :'Fail'

console.log(getGrade(95))
console.log(getGrade(82))
console.log(getGrade(45))