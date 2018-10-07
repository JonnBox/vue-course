var express = require('express');
var router = express.Router();

router.post('/getUserInfo', function(req, res, next) {
  console.log('请求成功')
  res.status(200).send({
    code: 200,
    data: {
      name: 'Lison'
    }
  })
});

module.exports = router;