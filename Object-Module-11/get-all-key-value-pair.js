const laptop ={
    name :'ASUS TUF GAMING F15',
    brand : 'ASUS',
    model : 'corei5',
    appInstaled :['neptune','chatgpt','vs code'],
    isDevice : true
}
const keys = Object.keys(laptop);
console.log(keys);

const values = Object.values(laptop);
console.log(values);

console.log(Object.entries(laptop));