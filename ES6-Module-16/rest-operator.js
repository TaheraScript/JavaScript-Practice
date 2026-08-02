function sum(a,b,c,...elements){
    //console.log(elements)
    let sum =0;
    for(num of elements){
        sum+= num;
        //console.log(sum)
       
        
    }
  return a+b+c+ sum;  
}
console.log(sum(20,40,10,30,56,12,34,76,90))

