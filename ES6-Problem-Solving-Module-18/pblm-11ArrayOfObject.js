/*
  Problem 11: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/
// const addGrade =(students)=> {
//   const modifiedStudents =students.map((student) =>{
//     //console.log(student)
//     const{name,marks} =student;//destructuring
//    //const newStudentWithGrade ={ name : name , marks :marks} 
//    const newStudentWithGrade ={name ,marks};//key and values name is same so we cam write the name once
  
//    if(marks >=90){
//     newStudentWithGrade.grade ='A+'
//    }
//    else if(marks >= 80){
//     newStudentWithGrade.grade = 'A'
//    }
//    else if(marks >= 60){
//     newStudentWithGrade.grade ='B'
//    }
//    else{
//     newStudentWithGrade.grade ='Fail'
//    }
//    return newStudentWithGrade;
//   });
//   return modifiedStudents
// };
// let students = [
//       { name: "Rafi", marks: 85 },
//       { name: "Karim", marks: 45 }
//     ] 
//     console.log(addGrade(students))

const addGrade =(students)=> {
  let persons =[...students]
  let modifiedStudents = []
   //console.log(persons)
   for(person of persons){
    //console.log(person)
    const{name,marks} =person;//destructuring
   //const newStudentWithGrade ={name :name,marks :marks};
  const newStudentWithGrade ={name ,marks}; //key and values name is same so we can write the name once
 let value =marks >= 90? 'A+':marks >= 80? 'A':marks >= 60? 'B' :'Fail'
 newStudentWithGrade.grade =value
 modifiedStudents.push(newStudentWithGrade)
    }
   return modifiedStudents;
  };
  
let students = [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ] 
    console.log(addGrade(students))