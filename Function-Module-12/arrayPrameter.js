/* double the first element of the array */

function firstElementDouble(arrays){
    console.log('the values are',arrays);
    const firstElement = arrays[0];
    const doubleElement = firstElement*2;
    return doubleElement;

}
const numbers = [3,4,5,6,7];
const doubled = firstElementDouble(numbers);
console.log(doubled)