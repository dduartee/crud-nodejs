
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/add', addRouter);

app.listen(3000, () => {
  console.log(`URL: http://localhost:${3000}`)
});

module.exports = app;
