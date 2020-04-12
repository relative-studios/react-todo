const router = require('express').Router();
let Todo = require('../../models/todo.model.js');

// @route POST api/todos/
// @desc Get todo items
// @access Public
router.route('/').get((req, res) => {
  // Grab the userId from the query
  const { userId } = req.query;

  // Search Todos collection for all todo items for username
  Todo.find().all('userId', userId)
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err))
});

// @route POST api/todos/add
// @desc Add Todo Item
// @access Public
router.post("/add", (req, res) => {
  // Grab required values from request, using destructuring for clarity
  const { userId, task } = req.body;

  // Build new todo item 
  const todo = {
    id: new Date().getTime(),
    title: task,
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
    .then((todo) => res.json(todo))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route PUT api/todos/delete
// @desc Delete Todo Item
// @access Public
router.put("/delete", (req, res) => {
  // Grab id from request, using destructuring for clarity
  const { id } = req.query;

  // Remove todo item by id
  Todo.findByIdAndDelete(id)
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;