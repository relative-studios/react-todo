// DEPENDENCIES
const cors = require('cors'); 
const express = require ('express'); 
const mongoose = require('mongoose');


// ROUTE IMPORTS
const userRouter = require('./routes/users');
const todosRouter = require('./routes/todos');

require('dotenv').config();

// CONFIG
const app = express();
const connection = mongoose.connection;
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


// EXPRESS
app.use(cors());
app.use(express.json());


// ROUTES
app.use('/', userRouter);
app.use('/todos', todosRouter);


// MONGOOSE
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);

connection.once('open', () => {
  console.log('Database connection established');
});


// LISTEN
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});