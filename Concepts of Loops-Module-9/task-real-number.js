// calculate the first N natural numbers,by while loop in javascript

let n=10;
let i=0;
let sum= 0;
while(i<n){
    sum=sum + i ;
    
    console.log('the first N natural number',i)
    i++;
}
console.log('the sum of real number is',sum);