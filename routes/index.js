var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hey HelloWorld!' });
});

module.exports = router;
