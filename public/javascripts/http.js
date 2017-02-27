/**
 * Created by sseen on 2017/2/21.
 */

function getUrlContent() {
    mydata=0
    $.post('/test',function (data) {
        $('#content').html(data);
    });
}