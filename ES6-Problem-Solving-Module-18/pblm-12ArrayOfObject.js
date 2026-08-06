/*
  Problem 12: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/

function cartTotalCalculate (object){
  
     let totalNumberOfItem = 0;
     let totalCost =0;
    for(i=0 ;i<object.length ;i++){
      let products = object[i]
      const {price,qty} =products //using destructuring
      totalNumberOfItem += qty //totalNumberOfItem += products.qty
      totalCost += price * qty //totalCost += products.price * products.qty
    }
    return `Total: ${totalNumberOfItem || 0} items, ${totalCost || 0} Taka`
  }

let items = [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 },
      { name: "Headphone", price: 500, qty: 1 }
    ]
console.log(cartTotalCalculate(items))
console.log(cartTotalCalculate([]))