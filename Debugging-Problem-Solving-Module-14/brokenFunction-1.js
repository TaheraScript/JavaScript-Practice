/* should calculate and return the total price including tax,so it can be used later in another calculation */

function calculateTotal(price,tax){
    let total = price + tax ;
    return total;
}
let finalAmount = calculateTotal(100,5);
console.log(finalAmount)
console.log(finalAmount + 20);