
let price =200;
let quantity = 3;
let discount =10;

// Calculate values
let totalPrice = price * quantity;
let discountAmount = totalPrice/100* discount;
let finalPrice = totalPrice - discountAmount;

// Display output
console.log("Total Price:", totalPrice);
console.log("Discount Amount:", discountAmount);
console.log("Final Price:", finalPrice);