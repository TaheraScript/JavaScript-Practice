// Task 9.1 — Contact Book
// Build a small "contact" system:
// let contact = {
//   name: "Alex Johnson",
//   email: "ALEX@EMAIL.COM",
//   phone: "555-1234"
// };
// Convert the email to lowercase and update the object.
// Loop through the contact object and print each key-value pair.
// Add a new property favoriteWords: [] (an array) — push 3 words to it.
// Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.

 let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
let set=contact.email.toLowerCase();
console.log(set);
console.log(contact.email);
console.log(contact);

console.log(Object.entries(contact))
contact.favouriteWords =['painting','fishing','walking']
console.log(contact)

let splitIt = contact.name.split('');
console.log(splitIt)
let reverseIt = splitIt.reverse('');
console.log(reverseIt);
let joinIt = reverseIt.join('');
console.log(joinIt);

console.log(contact.email.endsWith('@email.com'))




/* // 1. Convert email to lowercase and update the object
contact.email = contact.email.toLowerCase();
console.log("Updated email:", contact.email);

// 2. Loop through the contact object and print each key-value pair
for (let key in contact) {
  console.log(`${key}: ${contact[key]}`);
}

// 3. Add favoriteWords array and push 3 words
contact.favoriteWords = [];
contact.favoriteWords.push("javascript");
contact.favoriteWords.push("coffee");
contact.favoriteWords.push("sunshine");
console.log("Favorite words:", contact.favoriteWords);

// 4. Reverse the name string (using a reverse function from Task 4.1)
function reverseString(str) {
  return str.split("").reverse().join("");
}
let reversedName = reverseString(contact.name);
console.log("Reversed name:", reversedName);

// 5. Check if email includes "@email.com" (case-insensitive)
if (contact.email.toLowerCase().includes("@email.com")) {
  console.log("✅ Valid email domain confirmed!");
} else {
  console.log("❌ Email domain not recognized.");
}

// Final contact object
console.log("Final contact object:", contact); */