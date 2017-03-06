/**
 * Created by sseen on 2017/2/21.
 */

function getUrlContent() {
    mydata=0
    wrapperID = '#pullrefresh'
    scrollID = '#scroll'
    ulID = '#uList'
    $.post('/test',function (data) {
        
        // add content
        $(ulID).html(data);

        // div scroll wapper
        $(wrapperID).addClass('mui-content mui-scroll-wrapper')
        // div scroll
        $(scrollID).addClass('mui-scroll')
        // div pull refresh top
        $(ulID).addClass('mui-table-view mui-table-view-chevron');
        $(ulID + '> li').addClass('mui-table-view-cell');
        $(ulID + '> li a').addClass('mui-navigate-right');
        $(ulID + '> li h4').addClass('mui-pull-right');

        // remove header
        $('#header').remove();


        // stop refresh
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
    });
}

function getMoreDat(nowPage) {
    mydata=0
    wrapperID = '#pullrefresh'
    scrollID = '#scroll'
    ulID = '#uList'
    $.post('/moreData',function (data) {

        // add content
        $(ulID).append(data)

    });
}