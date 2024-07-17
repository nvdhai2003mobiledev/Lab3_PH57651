const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/studentRoute');

const app = express();

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/Lab3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB' + err.message));

// ejs
app.set('view engine', 'ejs');

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/student', studentRoute);
app.use('/', studentRoute);

// connect server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


