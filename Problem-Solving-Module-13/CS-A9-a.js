/*  MailBox Pro, an email management system, wants to analyze a sentence containing email addresses. Write a function analyzeEmailDomains(text) that returns an object containing the total number of email addresses and the longest email domain (the part after @). 
● "Invalid" if the input is not a string. 
Expected Output: 
● analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com") 
→ { emailCount: 3, longestDomain: "programminghero.com" } 
● analyzeEmailDomains("Hello everyone!") 
→ { emailCount: 0, longestDomain: "" } 
Hints: 
1. Use split(" ") to separate the sentence into words. 
2. Check whether a word contains "@" using includes("@"), then split("@") to extract the domain and compare its length. 
 */

function analyzeEmailDomains(text) {
  if(typeof text !== 'string'){
    return 'invalid'
  }
  let words = text.split(" ");
  let count = 0;
  let longestDomain = "";
  //console.log(words)
  for (i = 0; i < words.length; i++) {
    let word = words[i];

    //console.log(word)
    if (word.includes("@")) {
      count++;

      let newWord = word;
      //console.log(newWord)
      let splitIt = newWord.split("@");
      let domain = splitIt[1];

      if (domain.length > longestDomain.length) {
        longestDomain = domain;
      }
    }
  }
  const returnObj = {
    emailCount: count,
    longestDomain,
  };
  //console.log(count)
  return returnObj;
}

console.log( analyzeEmailDomains( "Contact support@gmail.com admin@yahoo.com info@programminghero.com", ),);
console.log(analyzeEmailDomains("Hello everyone!"));
console.log(analyzeEmailDomains(7869));
