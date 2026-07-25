let numbers = [7,3,5,0,1,8,2]
// numbers.sort();//will sort in ascending order
// console.log(numbers);
numbers.sort((a,b) => a-b);//will sort in ascending order
console.log(numbers);
numbers.sort((a,b) => b-a);//will sort in descending order
console.log(numbers);

// let fruits = ['mango' , 'papaya' , 'banana' , 'orange' ,'lichi']
// fruits.sort();
// console.log(fruits)