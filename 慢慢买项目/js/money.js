$(function () {
    var productid = getSearch('productid');
    // console.log(productid);
    // 第一个ajax请求
    $.ajax({
        type: 'get',
        url: ipAddress('getmoneyctrlproduct'),
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('money', info);
            $('.main').html(htmlStr);

        }
    })
})