$(function () {
    // 功能一：返回顶部操作
    $('#return').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);

    })
})