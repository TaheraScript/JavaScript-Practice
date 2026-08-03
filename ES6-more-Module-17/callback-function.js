// function registerStudent (cb){
//    //console.log('user is registering .Need more data')
//     //console.log(cb)
//     cb()
// }
// function userBasicInfo(){
//     let student={
//         name: 'Suvo',
//(result)         id : 23,
//         group : 'C'

//     }
//     console.log(student)
// }
// console.log(registerStudent (userBasicInfo))


function calculator(a,b,cb){
    let sum =a+b;
    cb(sum)//calls the callback parameter (displayResult)
}
function displayResult(result){//result ,recieves sum as a parameter
    console.log(result)
}

calculator (5,5,displayResult)//displayResult is as a callback function,it can't be called here.