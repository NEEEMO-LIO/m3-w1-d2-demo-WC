var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST form handler */
router.post('/', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Thank you, ${name}! We received your email: ${email}`);
});

module.exports = router;