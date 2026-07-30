/*  Given a single student object with name and three subject marks (bangla, english, math), write a function generateReportCard(student) that returns a NEW object containing the student's name, total, average, and grade (A+ for 90+, A for 80+, B for 70+, F below 70). 
● Return "Invalid" if: 
○ student is not an object 
○ bangla is not a number 
○ english is not a number
○ math is not a number 
Expected Output: 
student = { name:'Ayan', bangla:78, english:85, math:92 } Report: { name:'Ayan', total:255, average:85, grade:'A' } 
Hints: 
1. Access marks with student.bangla, student.english, student.math 2. Build and return a brand-new object — don't modify the original student object 
 */

function generateReportCard(student){

    if(typeof student !== 'object' || Array.isArray(student) == 'array'){ //because in javascript array is considered an object.
        return  "Invalid"
    }
    if(typeof student.bangla !== 'number' || typeof student.math !== 'number' || typeof student.english !== 'number'){
         return  "Invalid"
    }
    let studentsName = student.name;
    //console.log(studentsName)
    let totalNumber=student.bangla + student.english+ student.math
    //console.log(totalNumber)
    let averageNumber = totalNumber/3
    //console.log(averageNumber)
    let grade = 'A+' ;
    if(averageNumber >= 90){
        grade = 'A+'
    }
    else if(averageNumber >= 80){
        grade = 'A'
    }
    else if(averageNumber >= 70){
        grade = 'B'
    }
    else {
        grade = 'F'
    }

    const returnObj={
        name : studentsName,
        total : totalNumber,
        average : averageNumber,
        grade : grade
    } 
    return returnObj;
}




let student = { name:'Ayan', bangla:78, english:85, math:92 }
let result = generateReportCard(student)
console.log(result)