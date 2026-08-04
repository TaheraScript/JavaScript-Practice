// let student ={
//     name : 'Bokul',
//     id: 90,
//     age :20,
//     showName :function (){
//         return student.name
//     }

//     }
// console.log(student.showName())

let student ={
    name : 'Bokul',
    id: 90,
    age :20,
    showName :function (){
        return `name : ${this.name} , age : ${this.age}` 
         },
        showAge :() =>{
            return  `Age : ${this.age}`
        }
   
    

    }
console.log(student.showName())
console.log(student.showAge())