// Problem 14: You are given an object containing information about a student.

// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Count the total number of properties in the object.
// Check if the object contains a property named "email".
function objectKeyValues(object){

    let objKeys = Object.keys(student);
    for(key of objKeys){
        console.log(key);// Print all keys.
    }
        for (key of objKeys){
        let values = student[key];
        console.log(values);// Print all values.
    }

    for (key of objKeys){
        let values = student[key];
        console.log(key ,':', values);// Print each key-value pair.
    }
    console.log('Total Properties ',':',objKeys.length )// Count the total number of properties in the object.
    console.log('Has Email' ,':',object.hasOwnProperty('email'));// Check if the object contains a property named "email".
}
let student ={
    name: 'Utsho',
   age: 26,
 university: 'DIU',
 department: 'CSE'

}
let output = objectKeyValues(student)
