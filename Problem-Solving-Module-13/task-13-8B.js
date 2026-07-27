/* Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value. */
// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value
 
//person namok object a jei keyname gulo ase,segulo jdi argument hisebe key namok property te  beborito hoy tahole oye key ar value return koro onnothay default value return koro.
function getValueOrDefault(obj, key, defaultValue) {
  if(key in obj){
    return obj[key]
  }
 else{
  return defaultValue;
 }
}
 
let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0));        // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A"));  // Expected: "N/A"
console.log(getValueOrDefault(person, "name", "N/A"));  // Expected: "N/A"
