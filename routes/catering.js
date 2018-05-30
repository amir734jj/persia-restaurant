var express = require('express');
var router = express.Router();

/* GET catering page. */
router.get('/', function(req, res, next) {
  res.render('catering');
});

module.exports = router;
