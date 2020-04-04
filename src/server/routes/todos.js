const router = require('express').Router();
let Todos = require('../models/todo.model.js');

// This is for the general /todos route
router.route('/').get((req, res) => {

  // Grab all todos from DB
  Todos.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err))
});

// Create a new todo item
router.route('/add').post((req, res) => {

  // Grab required values from request, using destructuring for clarity
  const { userId, id, title, completed } = req.body;

  // Build new todo object to push to database
  const newTodo = new Todo(
    { 
      userId,
      id,
      title,
      completed
    }
  );

  // Save Todo item to DB
  newTodo.save()
    .then(() => res.json('Todo Item Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;