let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  const lengths = words.map(word => word.length);
  return lengths
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
