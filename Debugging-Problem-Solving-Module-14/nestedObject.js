/* should calculate a students average score across their subjects */

// function calculateAverage(student){
//     let subjects = student.marks;
//     let key = Object.keys(subjects)
//     subjects = key.length;
//    //console.log(key)
//     //console.log(subjects)
//     let total =
//     student.marks.math+
//     student.marks.physics+
//     student.marks.chemistry;

//     return (total / subjects).toFixed(2);
// }
// let student ={
//     marks:{
//   math :80,
//   physics : 90 ,
//   chemistry : 95 
//     }
// }
// console.log(calculateAverage(student));

/* OR */

function calculateAverage(student){
    
    let subjects= Object.values(student.marks)
   let totalSubjects= subjects.length;
   let total = 0;
   for(let elem of subjects){
    //console.log(elem);
    total += elem;
   }
    return (total /  totalSubjects).toFixed(2);
}
let student ={
    marks:{
  math :80,
  physics : 90 ,
  chemistry : 95 
    }
}
console.log(calculateAverage(student));

