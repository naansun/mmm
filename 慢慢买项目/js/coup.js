$(function () {
    var coupid = getSearch('couponid');
    console.log(coupid);
    $.ajax({
        type: 'get',
        url: ipAddress('getcouponproduct'),
        data: {
            couponid: coupid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('coup', info);
            $('.y_main ul').html(htmlStr);

        }
    })

})