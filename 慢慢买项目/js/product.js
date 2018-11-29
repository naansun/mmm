$(function () {
    var categoryid = getSearch('categoryid');
    var pageid = getSearch('pageid');
    // console.log(pageid);
    // console.log(categoryid);
    //一进入渲染页面
    $.ajax({
        type: 'get',
        url: ipAddress('getcategorybyid'),
        data: {
            categoryid: categoryid,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('product', info);
            $('.m_product').html(htmlStr);
        }

    })
    $.ajax({
        type: 'get',
        url: ipAddress('getproductlist'),
        data: {
            categoryid: categoryid,
            pageid: pageid

        },
        dataType: 'json',
        success: function (info) {
            console.log(info);

        }
    })



})