const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  const checkDos = todos.filter(array => array.completed === true)
  return checkDos
}

getCompletedTodo(todos);

/* 
  Output:
  [
    { topic: 'Doing pre-work', completed: true },
    { topic: 'Playing computer games', completed: true },
    { topic: 'Clean the room', completed: true }
  ]
*/
