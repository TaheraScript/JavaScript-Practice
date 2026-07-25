const laptop ={
    name :'ASUS TUF GAMING F15',
    brand : 'ASUS',
    model : 'corei5',
    appInstaled :['neptune','chatgpt','vs code'],
    isDevise : true
}
console.log(laptop);
delete laptop.brand;
delete laptop['model'];
console.log(laptop);