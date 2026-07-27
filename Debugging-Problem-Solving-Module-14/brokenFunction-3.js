/* applyDiscount should return the discount price.describeOrder should use that returened value to build a summary sentence*/

// function applyDiscount(price,percent){
//    return price - (price * percent) /100;

// }

// function describeOrder(name,total){
//     let discounted = applyDiscount(total,5);
//     return name + "'s order total is $" + discounted + " after discount."
// }
// // let result = applyDiscount()
// console.log(describeOrder("Sam",100))


/* Another way */

function applyDiscount(price,percent){
   return price - (price * percent) /100;

}

function describeOrder(name,total,percentage){
    let discounted = applyDiscount(total,percentage);
    return name + "'s order total is $" + discounted + " after discount."
}
// let result = applyDiscount()
console.log(describeOrder("Sam",100,5))
