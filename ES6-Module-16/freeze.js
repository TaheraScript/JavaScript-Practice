let student ={
    name :'Popy',
    age : 45,
    subject :{
        physics : 59,
        chemistry : 70,
        math: 90
    }
}

Object.freeze(student)
delete student.age
student.name ="Lopa"
student.subject.chemistry = 30
student.subject.bangle = 50
student.religion ="Islam"
console.log(student)