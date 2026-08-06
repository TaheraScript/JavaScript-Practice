let numbers =[56,89,45,80]
let sum =numbers.reduce((accumulator,element,index,array)=>{
    console.log('accumulater:',accumulator ,'element:',element)
    return accumulator + element
    
},0)//0 is the initial value,getting total we declear total =0,it works as same
console.log(sum)