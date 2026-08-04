//destruction in object
// let student ={
//     name :'Popy',
//     age : 45
// }

// const {age,name}=student
// console.log(name,age)

//overwrite or modify property on object
// let student ={
//     name :'Popy',
//     age : 45
// }

// const {age,name: fullName}=student
// console.log(fullName,age)

//nested object
let student ={
    name :'Popy',
    age : 45,
    subject :{
        physics : 59,
        chemistry : 70,
        math: 90
    }
}

const {age,name: fullName,subject :{math,physics:biology}}=student
console.log(fullName,age,math,biology)