const laptop ={
    name :'ASUS TUF GAMING F15',
    brand : 'ASUS',
    model : 'corei5',
    appInstalled :['neptune','chatgpt','vs code'],
    'is Device' : true,
    features:{
        count:100,
        gaming:{
            game1:'racing car',
            game2:'pubz',
            game3:'free fire'

        }
    }
}
console.log(laptop.features['gaming'].game2);
laptop.appInstalled[1]='claude';
console.log(laptop.appInstalled);