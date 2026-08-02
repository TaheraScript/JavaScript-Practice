let name = "Akib"
let product = 'earphone'
let quantity = 9
let price = 700

let message =`Hi, ${name} your order is placed on.You ordered ${quantity} pieces of ${product}`
let message2 = `You will have to pay ${price * quantity}`
console.log(message)
console.log(message2)


//multi line code
function perchaseMessage(name,product,quantity,price){
    let message =`Hi  ${name || 'dear customer'},
                  Your order is placed on.
                  You ordered ${quantity} pieces of ${product}.
                  You will have to pay ${price * quantity}.`
                  return message
}
console.log(perchaseMessage("Akib",'earphone', 9,700))
console.log(perchaseMessage(undefined,'earphone', 9,700))
