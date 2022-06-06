var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var testsRouter = require('./routes/tests');
var testedRouter = require('./routes/tested');
var typesRouter = require('./routes/types');
var exercisesRouter = require('./routes/exercises');
var errorsRouter = require('./routes/errors');
var collectionsRouter = require('./routes/collections');
var studentsRouter = require('./routes/students');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/api', indexRouter);
app.use('/api', testsRouter);
app.use('/api', typesRouter);
app.use('/api', testedRouter);
app.use('/api', exercisesRouter);
app.use('/api', errorsRouter);
app.use('/api', collectionsRouter);
app.use('/api', studentsRouter);

module.exports = app;
