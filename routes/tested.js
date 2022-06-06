var express = require('express');
var router = express.Router();

const tested = require('../controllers/testedController')

router.post('/setTested', tested.setTested);

router.get('/getTested', tested.getTested)

module.exports = router;