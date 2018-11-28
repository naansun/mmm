$(function () {

    //功能一：发送ajax请求  拿到导航信息   动态渲染数据
    render1();

    function render1() {
        $.ajax({
            type: 'get',
            url: 'http://192.168.27.73:9090/api/getindexmenu',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('nav', info);
                $('.m_nav ul').html(htmlStr);


            }
        })
    }
    // 功能二：点击更多按钮  使隐藏的部分导航出显示
    //使用事件委托   因为是动态渲染的
    $('.m_nav ul').on('click', '#moreBtn', function () {
        $('.m_nav li.hide').toggle();
    })


    //功能三：发送ajax请求  获取产品信息数据  进行动态渲染
    $.ajax({
        type: 'get',
        url: 'http://192.168.27.73:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('product', info);
            $('.m_info ul').html(htmlStr);

        }


    })


})