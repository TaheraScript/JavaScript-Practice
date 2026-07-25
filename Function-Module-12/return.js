function cutHalf(number){
    const half=number/2;
    return half;
}
const result= cutHalf(100);//call the cutHalf function
console.log('the result is' ,result);

const number2 = cutHalf(80);//call the cutHalf function
console.log('the number2 is',number2);

function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
const total = add(4,5);//call the add function
console.log('the total is ',total)

const total2= add(result,number2)//call the add function
console.log('the total2 is',total2);