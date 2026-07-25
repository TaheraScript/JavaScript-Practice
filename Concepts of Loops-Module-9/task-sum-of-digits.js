/* find the sum of digits of the number with for and while */

 /* for loop */

// let sum=0;
// for(i = 164; i>0 ; i=Math.floor(i/10)){
//    let remainder = i%10;
//         console.log('print the remainder',remainder)
//         sum =sum +remainder;
//         console.log('the sum is',sum)
//     }

/* while loop */
let i=9750;
let sum = 0;
while(i>0){
    let remainder = i%10;
    sum = sum+remainder;
    i=Math.floor(i/10);
    console.log('remainder',remainder,"&","sum of remainder",sum)
}

    