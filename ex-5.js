// const students = [
//   { name: "John", score: 80 },
//   { name: "Jane", score: 90 },
//   { name: "Jim", score: 85 },
//   { name: "Joan", score: 95 },
// ];

// function getAverageStudentScore(students) {
//   // Start coding here
// }

// getAverageStudentScore(students); // Output: 87.5
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore (totalScore,average) {
  return totalScore + average["score"] / students.length 
  //Return ค่าเฉลี่ยของคะแนนนักเรียน โดยการ หาคะแนนรวมก่อนแล้ว / students.length
}

const result = students.reduce(getAverageStudentScore,0)
console.log(result)

