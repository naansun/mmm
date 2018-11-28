$(function () {
    var pageid = 0;
    // console.log(pageid);
    render();

    function render() {

        $.ajax({
            type: 'get',
            url: 'http://192.168.27.73:9090/api/getmoneyctrl',
            data: {
                pageid: pageid
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('product', info);
                $('.m_info').html(htmlStr);
                $('#selectPage option[value=' + pageid + ']').prop('selected', true)
            }
        })
    }

    $('.m_info').on('click', '#next', function () {
        // console.log('haha');
        pageid++;
        // console.log(pageid);
        if (pageid >= 15) {
            pageid = 14;
            return;
        }
        render();

    })
    $('.m_info').on('click', '#pre', function () {
        pageid--;

        if (pageid < 0) {
            pageid = 0;
            return;
        }

        console.log(pageid);
        render();
    })
    $('.m_info').on('change', '#selectPage', function () {
        // console.log($(this).val());
        pageid = $(this).val();
        render();
    })



})