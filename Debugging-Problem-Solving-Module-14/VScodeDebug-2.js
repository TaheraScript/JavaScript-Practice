/* sum even numbers */

function sumEvenNumbers (prices){
    let total = 0;
    for (let i =0; i<prices.length; i++){
        if(prices[i]%2 === 0){
            total += prices[i];
        }
    }
    return total;
}
console.log(sumEvenNumbers([20,61,15,80]))