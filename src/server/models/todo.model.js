const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: { type: String, required: true },
  id: { type: Date, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true }
}, {
  timestames: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;