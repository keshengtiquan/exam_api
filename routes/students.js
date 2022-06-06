var express = require('express');
var router = express.Router();

const student = require('../controllers/studentContol');

/* GET home page. */
router.post('/getUSerInfo', student.getUSerInfo);

module.exports = router;