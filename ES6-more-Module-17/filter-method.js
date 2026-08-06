// let prices = [400,600,470,890]
// let expensiveProducts = prices.filter((price)=>{
//     return false
// })
// console.log(expensiveProducts)

//make a new array with numbers which are greater than 500
//  let prices = [400,600,470,890]
//  let highestPrice = prices.filter((price)=>{
//     if(price >500){
//         return true
//     }
//     return false
//  })
//  console.log(highestPrice)

 //on single statement -make a new array with numbers which are greater than 500
  let prices = [400,600,470,890]
  let highestPrice = prices.filter(price => price>=500)
  console.log(highestPrice)