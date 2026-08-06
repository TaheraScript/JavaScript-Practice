/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/
function recieptGenerator(itemName,price,quantity){
    let total = price*quantity
    return `${itemName} x${quantity} = ${total} Taka`
}
console.log(recieptGenerator("Pen", 20, 3))