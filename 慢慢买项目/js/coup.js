$(function () {
        var coupid = getSearch('couponid');
        console.log(coupid);
        $.ajax({
            type: 'get',
            url: ipAddress('getcouponproduct'),
            data: {
                couponid: coupid
            },
            dataType: 'json',
            success: function (info) {
                // 渲染产品页面
                console.log(info);
                var htmlStr = template('coup', info);
                $('.y_main ul').html(htmlStr); // 获取图片   用来制作轮播图
                var imgArr = [];
                var arr = info.result;
                console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    imgArr.push(arr[i].couponProductImg.split('=')[1].split('"')[1]);
                } // console.log(imgArr);
                // console.log(imgArr[0]);
                info.res = imgArr;
                console.log(info);
                var htmlStr1 = template('lun', info);
                $('.motai').html(htmlStr1);
                // 初始化轮播图区域


                var as = $('.y_main ul li a');
                // console.log(as);
                as.each(function (i, v) {
                    $(this).click(function () {
                        $('.motai').show();
                        // window.onload = function () {
                        var mySwiper = new Swiper('.swiper-container', {
                            direction: 'horizontal', // 垂直切换选项
                            loop: true, // 循环模式选项
                            initialSlide: i,
                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }
                        })
                        // }
                    })

                })

            }
        })





    }

)