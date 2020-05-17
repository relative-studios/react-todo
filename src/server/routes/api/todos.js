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
    completed: false,
    duedate: "",
    status: ""
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

// @route PUT api/todos/edit-title
// @desc Edit todo item's title
// @access Public
router.put("/edit-title", (req, res) => {
  // Grab the userId from the query
  const { id, todoTitle } = req.query;

  // Search Todos collection for all todo items for username

  Todo.findByIdAndUpdate(
    id,
    {
      $set: {
        'todoItem.title': todoTitle
      }
    }
  ).then(res.send('Todo item updated!'))
  .catch(err => res.status(400).json('Error' + err));
});

// @route PUT api/todos/edit-duedate
// @desc Edit todo item's duedate
// @access Public
router.put("/edit-duedate", (req, res) => {
  // Grab the userId and duedate from the query
  const { id, duedate } = req.query;

  // Search Todos collection for all todo items for username

  Todo.findByIdAndUpdate(
    id,
    {
      $set: {
        'todoItem.duedate': duedate
      }
    }
  ).then(res.send('Todo date updated!'))
  .catch(err => res.status(400).json('Error' + err));
});

// @route PUT api/todos/edit-status
// @desc Edit todo item's status
// @access Public
router.put("/edit-status", (req, res) => {
  // Grab the userId  and status from the query
  const { id, title, background } = req.query;

  // Search Todos collection for all todo items for username

  Todo.findByIdAndUpdate(
    id,
    {
      $set: {
        'todoItem.status': [
          title,
          background
        ]
      }
    }
  ).then(res.send('Todo status updated!'))
  .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;