/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/
let responseExtractor = (object) => {
    const {user:{age =18,name : userName}} = object
    return {userName ,age}//to get output as object formet
}
console.log(responseExtractor({ user: { name: "Rafi", age: 22 } }))
console.log(responseExtractor({ user: { name: "Rafi" } }))