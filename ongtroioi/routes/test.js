/**
 * Created by Bui Tien Tuan on 10/04/2015.
 */
var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res, next) {
    res.render('test',{ title: 'Test' });
});

module.exports = router;
