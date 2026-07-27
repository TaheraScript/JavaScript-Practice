/* should calculate the total value of all in-stock inventory items(quantity*price),skipping anything with 0 quantity  */

function getTotalStockValue(inventory){
    let totalValue = 0;
    for (let i =0; i<inventory.length;i++){
        let item = inventory[i];
        console.log(item)
        
   
    if(item.quantity > 0) {
        totalValue =totalValue + item.quantity* item.price;
    }
     }
     return totalValue;
}

let inventory = [
    {name:'Keyboard' ,quantity:5 ,price:100 },
    {name:"Mouse" ,quantity:0 ,price:50 },
    {name:"Monitor" ,quantity:4 ,price:50 }

]
console.log(getTotalStockValue(inventory))

