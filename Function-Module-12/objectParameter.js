const student = {

    name : 'Rahima Mehmud',
    age : 19,
    id: 3

}
function isBrilliant(student){
    console.log('identification of a student',student);
    const name = student.name;
    const id = student.id;
    if(id<5){
        console.log(name +' '+ 'is a brilliant student.');
    }
    else{
        console.log('is average one')
    }
} 
const verification = isBrilliant(student);
