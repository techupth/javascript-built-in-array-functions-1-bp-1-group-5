// const todos = [
//   { topic: "Doing pre-work", completed: true },
//   { topic: "Workout", completed: false },
//   { topic: "Playing computer games", completed: true },
//   { topic: "Relax", completed: false },
//   { topic: "Clean the room", completed: true },
// ];



// function getCompletedTodo(todos) {
//   // Start coding here
// }

// getCompletedTodo(todos);

// /* 
// 	Output:
// 	[
// 		{ topic: 'Doing pre-work', completed: true },
// 	  { topic: 'Playing computer games', completed: true },
// 	  { topic: 'Clean the room', completed: true }
// 	]
// */

const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo (todos) {

  return todos["completed"] // Return ตัว Array ของ Object ข้อมูล Todo ที่ทำเสร็จแล้ว
}

const result = todos.filter(getCompletedTodo)
console.log(result)

//Q: งงว่าทำไมมันถึงรู้ว่าอันนี้มันคือ true ทั้งๆที่เราระบุแค่ todos["completed"]