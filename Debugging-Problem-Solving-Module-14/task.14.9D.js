/* Should update a person's age property and return the updated object.
 */


function updateAge(person, newAge) {
  person.age = newAge; 
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }
