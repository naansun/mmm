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
                    // console.log(i);
                    // $(this).children().removeClass("current")
                    // if (i == titleid) {
                    //     $(this).children().addClass('current')
                    // }
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

                // 这种方法是通过传地址栏参数来进行整个页面刷新  然后渲染
                // let $a = $('.wrapper ul li a')
                // $a.each((i, v) => {
                //     $(v).removeClass("current")
                //     if (i == titleid) {
                //         $(v).addClass('current')
                //     }
                // })
                // $('.wrapper ul li a')
                // $('.wrapper ul li a[data-id=titleid]').addClass('current')
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