/**
 * Created by sseen on 2017/2/21.
 */

function getUrlContent() {
    mydata=0
    $.post('/test',function (data) {

        $('#content').html(data);
        $('#content').addClass('mui-content mui-scroll-wrapper')
        $('#content > ul').addClass('mui-table-view mui-table-view-chevron');
        $('#content > ul > li').addClass('mui-table-view-cell');
        $('#content > ul > li a').addClass('mui-navigate-right');

        $('#content > ul > li h4').addClass('mui-pull-right');
    });
}