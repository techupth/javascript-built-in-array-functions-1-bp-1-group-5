// let words = ["hello", "world"];

// function getWordLengths(words) {
//   // Start coding here
// }

// const result = getWordLengths(words);

// console.log(result); // Output: [5, 5]

let words = ["hello", "world"];

function getWordLengths (words){
  return words.length // Return ตัว Array ที่มี Value แต่ละอันเป็นจำนวนตัวอักษรของ Value นั้นๆ
}
  const result = words.map(getWordLengths)
  console.log(result)