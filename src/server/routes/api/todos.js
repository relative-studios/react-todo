const router = require('express').Router();
let Todo = require('../../models/todo.model.js');

// @route POST api/todos/add
// @desc Add Todo Item
// @access Public
router.route('/add').post((req, res) => {

  // Grab required values from request, using destructuring for clarity
  const { id, todoTitle } = req.body;

  // Build new todo item 
  const todo = {
    id: new Date().getTime(),
    title: todoTitle,
    completed: false
  }

  // Build full todo object to push to database, using todo var above as todoItem
  const newTodo = new Todo(
    {
      userId: id,
      todoItem: todo
    }
  );

  // Save Todo item to DB
  newTodo.save()
    .then(() => res.json('Todo Item Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;