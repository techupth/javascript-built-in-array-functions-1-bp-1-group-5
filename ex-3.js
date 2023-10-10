// 
const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics (todos) {
	return todos["topic"] // Return ตัว Array ของ String ที่เป็นชื่อ Topic ของ Todo
}
const result = todos.map(getTodoTopics)
console.log(result)