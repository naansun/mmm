$(function () {
    //    发送请求
    $.ajax({
        type: 'get',
        url: ipAddress('getsitenav'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('site', info);
            $('.href').html(htmlStr);

        }

    })


})