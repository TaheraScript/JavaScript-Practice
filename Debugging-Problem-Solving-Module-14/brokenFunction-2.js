/* should calculate age from birthYear (currentYear - birthYear)
and return a sentence like"My name is Alex,I am 20 years old,from Dhaka */

function introduce(name,year,city){
    let currentYear = new Date().getFullYear;
    let calculatedAge = currentYear -year;
    return "My name is "+ name + ",I am "+calculatedAge+" years old,from " + city;
}

console.log(introduce("Alex",2006,'Dhaka'));

