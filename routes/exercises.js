var express = require('express');
var router = express.Router();

const exercises = require('../controllers/exercisesController')

router.get('/getOneExercises', exercises.getOneExercises)

module.exports = router;