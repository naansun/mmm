// 专门通过传递的参数, 可以解析出地址栏的参数值
function getSearch(name) {
    var search = location.search; // ?name=pp&age=18&desc=%E5%B8%85

    // 解码成中文
    search = decodeURI(search); // ?name=pp&age=18&desc=帅

    // 将 ? 去掉
    search = search.slice(1); // name=pp&age=18&desc=帅

    // 根据 & 进行切割
    var arr = search.split("&"); // ["name=pp", "age=18", "desc=帅"]
    var obj = {};
    arr.forEach(function (v, i) {
        // v 就是每一项, ["name=pp"]
        var key = v.split("=")[0];
        var value = v.split("=")[1];
        obj[key] = value;
    });
    return obj[name];
}

function ipAddress(ip) {
    var ips = "http://192.168.27.49:9090/api/" + ip;
    return ips;
}



$(function () {
    // 功能一：返回顶部操作
    $('#return').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);

    })
})