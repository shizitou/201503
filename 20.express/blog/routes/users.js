var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('用户主页');
});
router.get('/add', function(req, res, next) {
  res.send('增加用户');
});
router.get('/edit', function(req, res, next) {
  res.send('修改用户');
});

module.exports = router;
