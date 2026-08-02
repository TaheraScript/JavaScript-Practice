//Global Scope-can be accessed anywhere in the program
var product = "Laptop";
let price = 1000;
const quantity = 5;

//block scope-can be accessed only within the block-only var can be accessed outside the block
if (true) {
    var product = "Laptop";
let price = 1000;
const quantity = 5;
}
console.log(product); //Laptop

//function scope-can be accessed only within the function
function display() {
   var product = "Laptop";
let price = 1000;
const quantity = 5
}
console.log(display()); //undefined


//function scope-can be accessed only within the function
function display() {
   var product = "Laptop";
let price = 1000;
const quantity = 5
}
console.log(product); //Laptop


