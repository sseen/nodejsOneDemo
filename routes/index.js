var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

// react 暂时不用
// var React = require('react');
// var ReactDOM = require('react-dom/server');
// var Home = require('./public/javascripts/Home');
// router.get('/react', function(req, res)  {
//     res.send(ReactDOM.renderToString(React.createFactory(Home)()))
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message:'message1' });
});

router.get('/test', function(req, res, next) {
    res.send('3');
});

/* POST to Add User Service */
router.post('/test', function(req, res) {

    request( {
        encoding: null,
        url: 'http://www.hainnu.edu.cn/html/xiaoyuan/'}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var html = iconv.decode(body, 'gbk')
            console.log(html) // 打印google首页
            //这里处理所有细节

            var $ = cheerio.load(html,{decodeEntities: false});
            var content = $("div.hnnuxysh_newsList").html()


            res.send(content);
        } else {
            console.log(error)
        }
    })


});



module.exports = router;

