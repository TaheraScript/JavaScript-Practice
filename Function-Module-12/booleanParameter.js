function halfOrDouble(price,isDouble){
    if(isDouble=== true){
        askingPrice= price*2;
        return askingPrice;
    }
    else{
        askingPrice=price/2;
        return askingPrice;
    }

}
const myPrice = halfOrDouble(100,true)
console.log('price for general people',myPrice)
const leaderPrice = halfOrDouble(100,false)
console.log('price for leaders',leaderPrice)