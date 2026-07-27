/* return the sum of all numbers in ar array */
function sumArray(numbers){
    let total =0;
    
    for(let i=0; i< numbers.length ; i++){
        total += Number(numbers[i].toFixed(2));
        
   }
   return Number(total.toFixed(2));
}
console.log(sumArray([10,20.2244,30.524]))