var express = require('express');
var router = express.Router();

const tests = require('../controllers/testsController')

router.get('/getTest', tests.getTestsInfo);

module.exports = router;