$(function () {
    var productid = getSearch('productid');
    var cate = getSearch('category');
    var url = decodeURI(location.search);
    var arr = url.split('?');
    var dizhi = '?' + arr[2];
    console.log(dizhi);
    // console.log(arr[2]);
    // console.log(url);
    // console.log(productid);
    // console.log(cate);
    $.ajax({
        type: 'get',
        url: ipAddress('getproduct'),
        data: {
            productid: productid,
        },
        dataType: 'json',
        success: function (info) {
            info['cate'] = cate;
            info['url'] = dizhi;
            console.log(info);
            var htmlStr = template('detail1', info);
            $('.b_detail').html(htmlStr);
            var htmlStr2 = template('detail2', info);
            $('.title').html(htmlStr2);
            var htmlStr3 = template('detail3', info);
            $('.plist').html(htmlStr3)


        }


    })
    $.ajax({
        type: 'get',
        url: ipAddress('getproductcom'),
        data: {
            productid: productid,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr4 = template('detail4', info);
            $('.com_list ul').html(htmlStr4);

        }

    })
})