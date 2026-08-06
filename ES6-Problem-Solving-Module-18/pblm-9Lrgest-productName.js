/*
  Problem 9: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/

//solved by Object.keys
// let getMostExpensiveProduct = (object) => {
//   let key = Object.keys(object);
//   let priceOfExpensiveProduct = 0;
//   let nameOfExpensiveProduct = "";
//   for (i = 0; i < key.length; i++) {
//     let keys = key[i];
//     let values = object[keys];
//       if (values > priceOfExpensiveProduct) {
//       priceOfExpensiveProduct = values;
//       nameOfExpensiveProduct = keys;
//     }
//   }
//   return nameOfExpensiveProduct;
// };
// console.log(getMostExpensiveProduct({ pen: 20, book: 150, bag: 500 }));

//solve by Object.entries
let getMostExpensiveProduct = (object) => {
  let entries = Object.entries(object);
  let priceOfExpensiveProduct = 0;
  let nameOfExpensiveProduct = "";
  for (i = 0; i <entries.length; i++) {
    let [keys,values]= entries[i];
    console.log([keys,values])
      if (values > priceOfExpensiveProduct) {
      priceOfExpensiveProduct = values;
      nameOfExpensiveProduct = keys;
    }
  }
  return nameOfExpensiveProduct;
};
console.log(getMostExpensiveProduct({ pen: 20, book: 150, bag: 500 }));
