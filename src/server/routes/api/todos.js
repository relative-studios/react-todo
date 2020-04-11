const router = require('express').Router();
let Todo = require('../../models/todo.model.js');

// @route POST api/todos/
// @desc Get todo items
// @access Public
router.route('/').get((req, res) => {

  // We need to grab all the users data for now
  // Eventually we will only grab the logged in users data
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err))
});

// @route POST api/todos/add
// @desc Add Todo Item
// @access Public
router.post("/add", (req, res) => {
  // Grab required values from request, using destructuring for clarity
  const { userId, todoTitle } = req.body;

  // Build new todo item 
  const todo = {
    id: new Date().getTime(),
    title: todoTitle,
    completed: false
  }

  // Build full todo object to push to database, using todo var above as todoItem
  const newTodo = new Todo(
    {
      userId,
      todoItem: todo
    }
  );

  // Save Todo item to DB
  newTodo.save()
    .then(() => res.json('Todo Item Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;