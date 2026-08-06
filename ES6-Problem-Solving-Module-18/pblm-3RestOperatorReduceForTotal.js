/*
  Problem 3: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

//accumulator= default value which gets update on each iteration
let calculateTotal=(discount,...prices) =>{
  // let total =0
  //   for(price of prices){
  //     total += price
  //     console.log(total)
      let total = prices.reduce((accumulator,currentPrice)=> accumulator + currentPrice,0)//can be wriiten rather upper conditions
    let discountedPrice = total*discount /100
    //console.log(discountedPrice)
    let payableAmmount = total - discountedPrice
    return payableAmmount
    }
  

console.log(calculateTotal(0, 100, 200, 300))
console.log(calculateTotal(10, 100, 200))