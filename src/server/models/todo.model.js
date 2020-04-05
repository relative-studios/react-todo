const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todosSchema = new Schema({
  userId: { type: String, required: true },
  todoItem: { type: Object }
}, {
  collection: 'todos',
  timestames: true,
});

const Todo = mongoose.model('Todo', todosSchema);

module.exports = Todo;