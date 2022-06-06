var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('open');
});

mongoose.connect('mongodb://localhost/examination_db');
module.exports = db;