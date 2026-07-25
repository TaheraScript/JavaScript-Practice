const laptop ={
    name :'ASUS TUF GAMING F15',
    brand : 'ASUS',
    model : 'corei5',
    appInstaled :['neptune','chatgpt','vs code'],
    isDevise : true
}
/* for in used in object */
for(const key in laptop){
    console.log(key)//will show key name
    const value = laptop[key];//every key will be on laptop[key] & based on it will change the value 
    console.log('key is',key ,'value is',value);

}