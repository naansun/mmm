$(function () {
    //发送ajax请求   获取数据   动态渲染页面；
    //功能一：渲染一级分类
    $.ajax({
        type: 'get',
        url: ipAddress('getcategorytitle'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('category', info);
            $('.row ul').html(htmlStr);

        }

    })
    // 功能二：点击arrow按钮  获取父级id   发送ajax请求
    //渲染二级分类
    //使用事件委托
    $('.row ul').on('click', '.arrow', function () {
        var id = $(this).parent().data('id');
        console.log(id);
        $.ajax({
            type: 'get',
            url: ipAddress('getcategory'),
            data: {
                titleid: id
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('category2', info);
                $('.row a[index=' + id + ']').siblings('.item').html(htmlStr);
                $('.row a[index=' + id + ']').siblings('.item').toggle();

            }
        })
    })






})