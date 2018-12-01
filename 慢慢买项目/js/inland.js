$(function () {
    // 发送ajax请求
    $.ajax({
        type: 'get',
        url: ipAddress('getinlanddiscount'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('island', info);
            $('.inland ul').html(htmlStr);
            $('.inland ul li .img img').lazyload({
                placeholder: "./lazy/timg.gif",
                threshold: 200,
                effect: "fadeIn"
            });
        }

    })
})