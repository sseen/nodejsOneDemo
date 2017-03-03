/**
 * Created by sseen on 2017/2/21.
 */

function getUrlContent() {
    mydata=0
    wrapperID = '#pullrefresh'
    scrollID = '#scroll'
    $.post('/test',function (data) {
        
        // add content
        $(scrollID).html(data);

        // div scroll wapper
        $(wrapperID).addClass('mui-content mui-scroll-wrapper')
        // div scroll
        $(scrollID).addClass('mui-scroll')
        // div pull refresh top
        $(scrollID + '> ul').addClass('mui-table-view mui-table-view-chevron');
        $(scrollID + '> ul > li').addClass('mui-table-view-cell');
        $(scrollID + '> ul > li a').addClass('mui-navigate-right');
        $(scrollID + '> ul > li h4').addClass('mui-pull-right');

        // remove header
        $('#header').remove();
    });
}