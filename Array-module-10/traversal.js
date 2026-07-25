/* to show every element of array in console.log */
/* while loop */
// let arr = [34,98,76,56,90]
// let i=0;
// while(i<6){
//     console.log('index',i)
//     console.log('elements',arr[i])
//     i++;
// }
/* sum of each element */

let arr =[34,98,76,56,90]
let sum=0;
for(i=0 ; i<arr.length  ;i++){
    sum=sum+arr[i];
    console.log('array',arr[i])
    console.log(sum)
}