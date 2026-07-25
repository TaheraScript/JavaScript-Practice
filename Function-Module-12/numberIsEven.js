function number(a){

    console.log(a ,'devided by 2','&','the remainder is ',a%2);
    if(a % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = number(8);
console.log(result)