$(function () {
    var width = 0;
    var titleid = 0;
    console.log(titleid);
    //发送ajax请求
    render();

    function render() {
        $.ajax({
            type: 'get',
            url: ipAddress('getbaicaijiatitle'),
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('baicai', info);
                $('.wrapper ul').html(htmlStr);
                // 获取所有的li
                var lis = $('.wrapper ul li');
                // console.log(lis);
                lis.each(function (i, v) {
                    width += $(this).width();
                })
                // width = width;
                console.log(width);
                $('.wrapper ul').width(width + 2);
                // 实现右侧的区域滚动
                new IScroll(".wrapper", {
                    scrollX: true,
                    scrollY: false
                });
            }
        })
    };
    $.ajax({
        type: 'get',
        url: ipAddress('getbaicaijiaproduct'),
        data: {
            titleid: titleid,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr2 = template('baicai2', info);
            $('.list ul').html(htmlStr2);
        }

    })

})