function student(name = 'Mukta'){
    return 'Hello,'+ name
}
//console.log (student())

//more than one parameter
function student(name = 'Mukta',greet='Good Morning!'){
    return 'Hello,'+ name +" " +greet
}
console.log (student())