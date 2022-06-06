var express = require('express');
var router = express.Router();

const errors = require('../controllers/errorsController')

router.post('/setErrors', errors.setErrors)
router.post('/getErrors', errors.getErrors);

module.exports = router;