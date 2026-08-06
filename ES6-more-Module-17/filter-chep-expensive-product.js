//find out the cheapest and highest priced mobile
let mobiles=[
    {
        model :'iphone 12',
        price :1000
    },
    {
        model :'iphone 13',
        price :2000
    },
    {
        model :'iphone 14',
        price :3000
    },
    {
        model :'iphone 15',
        price :4000
    },
    {
        model :'iphone 16',
        price :5000
    }
]
let expensiveMobile =mobiles.filter(mobile=> price>=3000)
let cheapestMobile =mobiles.filter(mobile=> price<=3000)
console.log(expensiveMobile)
console.log(cheapestMobile)