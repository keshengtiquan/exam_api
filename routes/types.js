var express = require('express');
var router = express.Router();

const types = require('../controllers/typesController')

router.get('/getTypes', types.getTypesInfo);

module.exports = router;