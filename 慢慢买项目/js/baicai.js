$(function () {
    var width = 0;
    var titleid;
    // console.log(titleid);
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
                // console.log(width);
                $('.wrapper ul').width(width + 2);
                // 实现区域滚动
                new IScroll(".wrapper", {
                    scrollX: true,
                    scrollY: false
                });
            }
        })
    };


    render1();

    function render1() {

        $.ajax({
            type: 'get',
            url: ipAddress('getbaicaijiaproduct'),
            data: {
                titleid: titleid || 0,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr2 = template('baicai2', info);
                $('.list ul').html(htmlStr2);
                $('.list ul li a .pic img').lazyload({
                    placeholder: "./lazy/timg3.gif",
                    threshold: 200,
                    effect: "fadeIn"
                });
            }

        })
    }


    // 使用事件委托   获取id  并根据id进行动态渲染
    $('.wrapper ul').on('click', 'a', function () {
        var width = $(this).parent().width();
        console.log(width);
        titleid = $(this).data('id');
        if (titleid > 0) {
            var ul = document.querySelector('.wrapper ul');
            ul.style.left = '-' + width + 'px';
            ul.style.transition = 'all .5s';
        }

        // console.log(titleid);
        $('.wrapper ul li a').removeClass('current');
        $(this).addClass('current');
        console.log($(this));
        render1();
    })



})