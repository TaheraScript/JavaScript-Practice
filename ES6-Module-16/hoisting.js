//if we console.log any traditional function before initialization,we will get the output of console.log
// console.log(greet()); // "Hello!"

// function greet() {
//   console.log("Hello!");
// }

//if we console.log any traditional function before initialization,we will not get  the output of console.log ,it will be a reference error

console.log(greet()); //referenceError
var greet = ()=> {
  console.log("Hello!");
}

//if we console.log any variable declared by var before initialization,we will get undefined as the output of console.log 

// console.log(x); // undefined
// var x = 10;
// console.log(x); // 10

//if we console.log any variable declared by let/const before initialization,we will not get  the output of console.log ,it will be a reference error

//let 
// console.log(a); // ReferenceError
// let a = 5;

//const
// console.log(b); // ReferenceError
// const b = 5;

