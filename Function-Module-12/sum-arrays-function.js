function sumOfArray(arrays){
    console.log('number of arrays',arrays);
    let sum=0;
    for(let num of arrays){
        sum = sum+num;
    }
    return sum;
}
const numbers = [5,3,9,6,7];
const sum = sumOfArray(numbers);
console.log('sum of all arrays is',sum)