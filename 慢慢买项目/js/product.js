$(function () {
    template.defaults.imports.int = function (num) {
        return Math.ceil(num)
    }
    var categoryid = getSearch('categoryid');
    var pageid = getSearch('pageid');
    var category = getSearch('category');
    var url = decodeURI(location.search);
    console.log(url);
    console.log(category);
    // console.log(pageid);
    // console.log(categoryid);
    //一进入渲染页面    第一个ajax情求  渲染标题内容
    $.ajax({
        type: 'get',
        url: ipAddress('getcategorybyid'),
        data: {
            categoryid: categoryid,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template('product1', info);
            $('.m_product .title').html(htmlStr);
        }

    })
    render();

    function render() {

        $.ajax({
            type: 'get',
            url: ipAddress('getproductlist'),
            data: {
                categoryid: categoryid,
                pageid: pageid

            },
            dataType: 'json',
            success: function (info) {
                info['category'] = category;
                info['url'] = url;
                console.log(info);
                var num = Math.ceil(info.totalCount / info.pagesize);
                // console.log(num);
                var htmlStr = template('product2', info);
                var htmlStr2 = template('product3', info);
                $('.page').html(htmlStr2);
                $('.m_info ul').html(htmlStr);
                $('#selectPage option[value=' + pageid + ']').prop('selected', true);

            }
        })
    }

    // 当点击下一页时
    $('.page').on('click', '#next', function () {
        // console.log('haha');
        pageid++;
        if (pageid > 3) {
            pageid = 3;
            return;
        }
        render();
    })
    $('.page').on('click', '#pre', function () {
        pageid--;
        if (pageid < 0) {
            pageid = 1;
            return;
        }
        render();
    })



    $('.page').on('change', '#selectPage', function () {
        pageid = $(this).val();
        render();
    })



})