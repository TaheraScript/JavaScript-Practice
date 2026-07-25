const age = 15;
const withAGuardian = true;
if (age> 18){
    console.log('can enter the park-1')
    if(withAGuardian == true){
        console.log('can enter into the jungle')}
    else{
        console.log('only visit selected area')
    }
}
else {
    console.log('can enter the park-2')
    if(withAGuardian){
        console.log('only visit children area')
    }
    else{
        console.log('you are not allowed')
    }
}
