$(function () {
    var productId = getSearch('productId');
    console.log(productId);
    $.ajax({
        type: 'get',
        url: ipAddress('getdiscountproduct'),
        data: {
            productid: productId
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('money', info);
            $('.main').html(htmlStr);
        }

    })
})