/*  QuickCart, an e-commerce app, double-checks that the sum of individual item prices matches the total shown at checkout. Write a function verifyCartTotal(itemPrices, displayedTotal) that returns true if they match. ● Return "Invalid" if: 
○ itemPrices is not an array 
○ displayedTotal is not a number 
○ any price in itemPrices is not a number 
Expected Output: 
verifyCartTotal([250, 400, 150], 800) → true 
verifyCartTotal([250, 400, 150], 750) → false 
Hints: 
1. Loop through itemPrices and add them all up 
2. Compare the computed sum to displayedTotal with === 
 */
function verifyCartTotal(itemPrices, displayedTotal){
    if (!Array.isArray(itemPrices) || typeof displayedTotal != 'number' ){
        return 'invalid'
    }
    let sum = 0;
    for(let price of itemPrices){
        //console.log(price)
        sum += price
       //console.log(sum)
       if (typeof price !== 'number'){
        return 'invalid'
       }
    } 
    if(sum === displayedTotal){
        return true
       }
       else {
        return false
       }
    
}
console.log(verifyCartTotal([250, 400, 150], 800))
console.log(verifyCartTotal([250, 400, 150], 750) ) 