// Task 1.1 — Spot the Difference
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];
let str='hello';
let arr = ['h','e','l','l','o'];

// Log str.length and arr.length. What do you notice?
let length1 = str.length;
console.log(length1);
let length2 = arr.length;
console.log(length2);

// Try str[0] and arr[0]. Do both work the same way?
let get1 = str[0];
console.log(get1);
let get2 = arr[0];
console.log(get2);

// Try str.push("!") — what happens? Why does this fail for strings but not arrays?

// let push1 = str.push('b');//str.push is not a function so,it will not work
// console.log(push1);
let push2 = arr.push('b');
console.log(arr);