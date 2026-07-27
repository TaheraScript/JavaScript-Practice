/* find index of value */

// function findIndexOfValue(arr,target){
//     for(let i =0 ; i< arr.length ; i++){
//         if(arr[i] === target){
//            return i
//         }
//     }
//     return -1;
// }
// console.log(findIndexOfValue([10,20,30],20))


/* average of positive array */
function averageOfPositiveArray(arr){
    let total = 0;
    let count =0 ;
    for (i=0 ;i< arr.length ; i++){
        if(arr[i] > 0){

             total +=Number( arr[i].toFixed(2));
            console.log(total,'is total')
            count++;
        }
        
        console.log(count,'is count')
    }
   return total/count;
}
console.log(averageOfPositiveArray([-5,10.22,15.232,5]))