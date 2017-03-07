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
            var html = iconv.decode(body, 'gbk' + '');
            var content='';
            //console.log(html) // 打印google首页
            //这里处理所有细节

            var $ = cheerio.load(html,{decodeEntities: false});
            $('div.navigation_style').remove();
            $('div.clear').remove();
            $('div.hnnuxysh_nextPage').remove();
            $('div.footer').remove();
            $("div.hnnuxysh_newsList ul li").each(function (i, elem) {
                content += ($(this))
            }).html();


            res.send(content);
        } else {
            console.log(error)
        }
    })

});

// detail
router.post('/getDetail', function(req, res) {
    var page2 = req.param('href');
    request( {
        encoding: null,
        url: page2}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var html = iconv.decode(body, 'gbk' + '');
            var content='';
            //console.log(html) // 打印google首页
            //这里处理所有细节

            var $ = cheerio.load(html,{decodeEntities: false});
            content = $("div.indexContents").html();

            res.send(content);
        } else {
            console.log(error)
        }
    })

});

router.post('/moreData', function (req, res) {
    var page2 = req.param('nowPage');
    var html2 = page2 + '.html';
    request( {
        encoding: null,
        url: 'http://www.hainnu.edu.cn/html/xiaoyuan/' + html2}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var html = iconv.decode(body, 'gbk' + '');
            var content='';
            //console.log(html); // 打印google首页
            //这里处理所有细节

            var $ = cheerio.load(html,{decodeEntities: false});

            $("div.hnnuxysh_newsList ul li").each(function (i, elem) {
                content += ($(this))
            }).html();


            res.send(content);
        } else {
            console.log(error)
        }
    })
});



module.exports = router;

