/*  SnapText, a note-taking app, builds a quick preview of a caption by keeping only the words at even index positions (0, 2, 4...). Write a function filterEvenPositionWords(sentence) that returns the filtered sentence. 
Expected Output: 
filterEvenPositionWords('The quick brown fox jumps') 
→ 'The brown jumps'
Hints: 
1. split(' ') into an array of words 
2. Loop through the words and keep the ones where the index passes i % 2 === 0 
 */
function filterEvenPositionWords(sentence) {
  let words = sentence.split(" ");
  let evenIndex = [];

  for (i = 0; i < words.length; i++) {
    //console.log(words)
    if (i % 2 === 0) {
      evenIndex.push(words[i]);
      //console.log(evenIndex);
    }
  }
  let result = evenIndex.join(" ");
  
  return result;
}
let output = filterEvenPositionWords("The quick brown fox jumps");
console.log(output);
