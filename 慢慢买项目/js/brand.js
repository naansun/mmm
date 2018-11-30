$(function () {
    $.ajax({
        type: 'get',
        url: ipAddress('getbrandtitle'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('brand', info);
            $('.b_content ul').html(htmlStr);
        }
    })
})