$(function () {
    var shopid;
    console.log(shopid);
    var areaid;
    console.log(areaid);
    // 一进入页面  就进行渲染
    render();
    // 获取店铺信息
    $.ajax({
        type: 'get',
        url: ipAddress('getgsshop'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr1 = template('list', info);
            $('#shop ul').html(htmlStr1);
            //获取所有的li   然后进行选择
            var lis = $('#shop ul li');
            lis.each(function () {
                $(this).children().click(function () {
                    // 整个盒子隐藏
                    $('#shop').hide();
                    // 对号 图标进行相应的显示与隐藏
                    $('#shop ul li a i').hide();
                    $(this).children().show();
                    // 获取店铺id
                    shopid = $(this).data('id');
                    render();
                    console.log(shopid);
                    // 获取店铺名称
                    var title = $(this).data('title');
                    // console.log(title);
                    //将其赋值给标题li
                    $('.shop span').text(title);

                })
            })

        }

    })

    // 获取地区信息
    $.ajax({
        type: 'get',
        url: ipAddress('getgsshoparea'),
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr2 = template('list2', info);
            $('#area ul').html(htmlStr2);
            // 获取所有的li
            var lis = $('#area ul li');
            // console.log(lis);
            lis.each(function () {
                $(this).children().click(function () {
                    // 整个盒子隐藏
                    $('#area').hide();
                    // 对号 图标进行相应的显示与隐藏
                    $('#area ul li a i').hide();
                    $(this).children().show();
                    // 获取店铺id
                    areaid = $(this).data('id');
                    render();
                    console.log(areaid);
                    // 获取店铺名称
                    var title = $(this).data('title');
                    // console.log(title);
                    //将其赋值给标题li
                    $('.di span').text(title);

                })

            })

        }
    })


    // 根据id  发送ajax请求   然后进行动态渲染
    function render() {
        $.ajax({
            type: 'get',
            url: ipAddress('getgsproduct'),
            data: {
                shopid: shopid || 0,
                areaid: areaid || 0
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr3 = template('list3', info);
                $('.gs_list ul').html(htmlStr3);

            }
        })

    }

    //当点击按钮时   店铺信息显示
    $('.shop').click(function () {
        $('#shop').toggle();
    })
    // 当点击地区按钮时  地区信息显示
    $('.di').click(function () {
        $('#area').toggle();
    })
    // 点击价格按钮    价格信息显示
    $('.pri').click(function () {
        $('#price').toggle().children().find('i').show();;
    })


})