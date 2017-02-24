var express = require('express');
var router = express.Router();

var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message:'message1' });
});

router.get('/test', function(req, res, next) {
    res.send('3');
});

/* POST to Add User Service */
router.post('/test', function(req, res) {

    request('http://www.bing.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印google首页
        } else {
            console.log(error)
        }
    })

    res.send("Thank you");

});



module.exports = router;

