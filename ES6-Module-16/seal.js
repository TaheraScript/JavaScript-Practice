let student ={
    name :'Popy',
    age : 45,
    subject :{
        physics : 59,
        chemistry : 70,
        math: 90
    }
}

Object.seal(student)
delete student.age
student.subject.chemistry = 80
student.religion ="Islam"
console.log(student)