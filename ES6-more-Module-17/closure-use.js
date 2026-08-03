function cashRegister (){
    let amount =0;
    return function(payableAmount){
        //console.log(payableAmount)
        amount +=payableAmount
        return amount;
    }
}
let coffeeShopCashCounter = cashRegister()
let restaurantCahCounter = cashRegister()
console.log(coffeeShopCashCounter(200))
console.log(coffeeShopCashCounter(500))
console.log(coffeeShopCashCounter(100))
console.log(coffeeShopCashCounter(200))
console.log(restaurantCahCounter(50))
console.log(coffeeShopCashCounter(200))