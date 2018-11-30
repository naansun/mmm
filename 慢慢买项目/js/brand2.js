$(function () {
    var id = getSearch('brandtitleid');
    var pid = 1;
    console.log(id);


    // 第一个ajax请求
    $.ajax({
        type: 'get',
        url: ipAddress('getbrand'),
        data: {
            brandtitleid: id
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('brand2', info);
            $('.b2_content ul').html(htmlStr);

        }
    })
    // 第二个ajax请求
    $.ajax({
        type: 'get',
        url: ipAddress('getbrandproductlist'),
        data: {
            brandtitleid: id,
            pagesize: 4
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr1 = template('brand3', info);
            $('.b3_content ul').html(htmlStr1);
            $('.b3_content ul li a').each(function (i, v) {
                var pid = $(this).data('id');
                // console.log(pid);

            })

        }
    })

    // 第三个ajax请求
    $.ajax({
        type: 'get',
        url: ipAddress('getproductcom'),
        data: {
            productid: pid,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr2 = template('brand4', info);
            $('.b4_content ul').html(htmlStr2);

        }
    })
})