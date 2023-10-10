// let words = ["apple", "cat", "dog", "elephant"];

// function get5CharWords(words) {
//   // Start coding here
// }

// const result = get5CharWords(words);

// console.log(result); // Output: ["apple", "elephant"]

let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords (words) {
  return words.length >= 5 // Return ตัว Array ของ Value ที่มีความยาวตัวอักษร 5 ตัวขึ้นไป

}
const result = words.filter(get5CharWords);
console.log(result)