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
let findSpecificMobile = mobiles.find(mobile=> mobile.model === 'iphone 14')
console.log(findSpecificMobile)