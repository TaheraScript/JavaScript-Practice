//spred on array
//let numbers = [23,45,24,56]
//console.log(...numbers)


// identifies the largest number by Math.Max()
// let maximumNumber = Math.max(34,56,89,67)
// console.log(maximumNumber)


//spread,copy an Array
// let numbers = [23,45,24,56]
// let number2 =[...numbers,780,546]
// numbers.push(90)
// console.log(numbers)
// console.log(number2)

//spread,copy an  object
let student={
    name: 'Akib',
    id : 45

}
let student2 ={...student,gpa:5}
student.something = 'test'
console.log(student)
console.log(student2)