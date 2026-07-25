const laptop ={
    name :'ASUS TUF GAMING F15',
    brand : 'ASUS',
    model : 'corei5',
    appInstaled :['neptune','chatgpt','vs code'],
    isDevise : true
}
const keys = Object.keys(laptop);
console.log(keys);
/* for of used on array(here the key output is on array) */
for (const key of keys){
    console.log(key);
    const value = laptop[key]
    console.log('key is', key ,'&','value is',value);
}