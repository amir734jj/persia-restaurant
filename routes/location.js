var express = require('express');
var router = express.Router();

/* GET location page. */
router.get('/', function(req, res, next) {
  res.render('location');
});

module.exports = router;
