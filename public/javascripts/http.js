/**
 * Created by sseen on 2017/2/21.
 */

let ulID = '#uList'

function getUrlContent() {
    wrapperID = '#pullrefresh';
    scrollID = '#scroll';
    $.post('/test',function (data) {
        
        // add content
        $(ulID).html(data);

        // div scroll wapper
        $(wrapperID).addClass('mui-content mui-scroll-wrapper');
        // div scroll
        $(scrollID).addClass('mui-scroll');
        // div pull refresh top
        $(ulID).addClass('mui-table-view mui-table-view-chevron');

        transformView();

        // stop refresh
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
    });
}

function getMoreDat(nowPage) {
    ulID = '#uList';
    $.post('/moreData?nowPage='+nowPage,function (data) {

        // add content
        $(ulID).append(data);

        transformView();

    });
}

function transformView() {
    // add cell style
    $(ulID + '> li').addClass('mui-table-view-cell');
    // add > style
    $(ulID + '> li a').addClass('mui-navigate-right');
    // h4 replace span
    $('h4').each(function(){
        $(this).replaceWith('<span>'+$(this).html()+'</span>');
    });
    $('span').addClass('mui-pull-right');

    //主列表点击事件
    mui(ulID).on('tap', 'a', function () {
        var id = this.getAttribute("data-wid");
        if (!id) {
            id = this.getAttribute('href');
        }
        var href = this.getAttribute('href');

        //非plus环境，直接走href跳转
        if (!mui.os.plus) {
            getDetail(href);
            return;
        }
    });
}

function getDetail(href) {
    location.href = "http://127.0.0.1:3000/getDetail?href=";
    $.post('/getDetail?href='+href,function (data) {

    });
}