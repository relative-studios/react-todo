// DEPENDENCIES
const cors = require('cors'); 
const express = require ('express'); 
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");


// ROUTE IMPORTS
const userRouter = require('./routes/api/users');
const todosRouter = require('./routes/api/todos');

require('dotenv').config();

// CONFIG
const app = express();
const connection = mongoose.connection;
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


// EXPRESS
app.use(cors());
app.use(express.json());


// BODY PARSER MIDDLEWARE
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// ROUTES
app.use('/api/users', userRouter);
app.use('/api/todos', todosRouter);


// MONGOOSE
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

connection.once('open', () => {
  console.log('Database connection established');
});


// PASSPORT
app.use(passport.initialize());
require("./config/passport")(passport);


// LISTEN
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});