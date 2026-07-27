/* loop through an object property */

//without function

let student= {
    name : 'tania',
    id : 34,
    section :'science',
    subject : 'math'
}

//for of loop
let objKeys = Object.keys(student)
for(let key of objKeys){
    console.log(key ,':',student[key])
}

//for in loop
// for(let key   in student)//find the name of keys on string
//  { 
//     console.log(key ,':' ,student[key])
// }

//Object.keys 

// let objKeys =Object.keys(student);//find the name of keys on array
// console.log(objKeys);
// for(i=0 ; i<objKeys.length ; i++){
//     let keysName = objKeys[i];//convert keys name on string
//     let valueName = student[keysName ]
//     console.log(keysName ,':', valueName)
// }

//with function

// function keyValuesInLoop(student){
// let objKeys =Object.keys(student);//find the name of keys on array
// console.log(objKeys);
// for(i=0 ; i<objKeys.length ; i++){
//     let keysName = objKeys[i];//convert keys name on string
//     let valueName = student[keysName ]
//     console.log(keysName ,':', valueName)
// }
// }
//  let aStudent= {
//     name : 'tania',
//     id : 34,
//     section :'science',
//     subject : 'math'
// }
// let output = keyValuesInLoop(aStudent)
// console.log(output)