/* count vowel on a string */

//without function
// let str = 'Bangladesh';
// let vowels ='aeiou';
// let count = 0;
// for (i = 0; i< str.length ; i++){
//     let letter = str[i];
//     console.log('letter is ',letter)
//     if(vowels.includes(letter)){
//     console.log('vowel  ')
//     count++;
//     }   
// }
// console.log('number of vowels are',count)

//with function
function vowelCount(str){
    let vowels ='aeiou';
let count = 0;
for (i = 0; i< str.length ; i++){
    let letter = str[i];
    console.log('letter is ',letter)
    if(vowels.includes(letter)){
    console.log('vowel  ')
    count++;
    }   
}
return count;
}
let output = vowelCount('Bangladesh');
console.log(output)
let result = vowelCount('Programming Hero');
console.log(result)