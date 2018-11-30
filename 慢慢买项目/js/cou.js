$(function () {
    $.ajax({
        type: 'get',
        url: ipAddress('getcoupon'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('cou', info);
            $('.main ul').html(htmlStr);

        }
    })
})