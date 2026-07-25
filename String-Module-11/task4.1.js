// Task 4.1 — Three Reversal Methods
// Write a function reverseString(str) three different ways:
// Using .split(""), .reverse(), and .join("")
let wordJ = 'JavaScript';
let splitIt = wordJ.split('');
console.log(splitIt);
let reverseIt = splitIt.reverse('');
console.log(reverseIt);
let joinIt = reverseIt.join('');
console.log(joinIt);



// Using a for loop that builds the reversed string character by character
let reverseString = '';
let words = 'JavaScript';
for(const word of words){
    console.log(word);

     reverseString=word+ reverseString;
     console.log(reverseString)
}

// Test all three with "JavaScript" → should return "tpircSavaJ".
// Bonus: Which method do you think is fastest? Why?


