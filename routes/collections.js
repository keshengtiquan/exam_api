var express = require('express');
var router = express.Router();

const { getCollections } = require('../controllers/collectionContol')

/* GET home page. */
router.get('/getCollections', getCollections);

module.exports = router;
