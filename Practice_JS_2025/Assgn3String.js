let sentence = "   Javascript is Awesome! javascript is Fun.    "
sentence = sentence.trim();

console.log(sentence);
// Replace "Awesome" with "powerful"
sentence = sentence.replace("Awesome", "powerful");
console.log(sentence);

// Slice out the word "powerful"
const startIndex = sentence.indexOf("powerful");
const word = sentence.slice(startIndex, startIndex + "powerful".length);

console.log(word);
// Replace the second "javascript" with "JS"
sentence = sentence.replace("javascript", "JS");

console.log(sentence);
console.log(sentence.indexOf("Fun"));
console.log(`"final string is": ${sentence}`)
