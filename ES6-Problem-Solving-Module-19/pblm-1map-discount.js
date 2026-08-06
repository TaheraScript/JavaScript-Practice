/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

//traditional way
// let applyDiscount = (prices, rate)=>{
//     const newPrices =[...prices]
//     const pricesAfterDiscount=[]
//     for(let newPrice of newPrices){
//        let discountedPrice = newPrice*rate /100
//         //console.log(discountedPrice)
//         let priceToPay = newPrice - discountedPrice
//         pricesAfterDiscount.push(priceToPay)
//         //console.log(pricesAfterDiscount)
//     }
//     return pricesAfterDiscount
// }
// let prices = [500, 1000, 250]
//   let  rate   = 10   
//   console.log( applyDiscount(prices, rate))

//map method
 let applyDiscount=(prices, discountRate = 0)=>{
let pricesAfterDiscount =prices.map((price)=>{
  let discountedPrice =price*rate /100
  return price - discountedPrice
})
return pricesAfterDiscount
}
let productPrices = [500, 1000, 250]
    

   console.log( applyDiscount(productPrices,10))