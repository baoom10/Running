$(function(){
	updateTime();
    //倒计时函数
    function updateTime() {
        var times = [
            new Date("2017/1/15 23:43:50"),
            new Date("2016/12/19 23:49:50"),
            new Date("2017/11/16 23:49:50"),
        ];

        $(".time").each(function (i) {

            var nowdate = new Date();
            var endDate = times[i]; //结束时间字符串

//结束时间毫秒数

            var tVal = parseInt(( endDate - nowdate) / 1000);
            if (tVal > 0) {
                var s = parseInt(tVal % 60);
                s = s < 10 ? "0" + s : s;
                var m = parseInt((tVal / 60) % 60);
                m = m < 10 ? "0" + m : m;
                var h = parseInt((tVal / 3600) % 24);
                h = h < 10 ? "0" + h : h;
                var d = parseInt((tVal / 3600) / 24);
                $(this).html(d + "天" + h + "小时" + m + "分"+s+"秒");
            }
            else {
                $(this).html('活动结束了！');

            }
        });
        setTimeout(updateTime, 1000);
    }
//点击次数计算
   $('ul>li>a').click(function (e) {
        arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
        ++arguments.callee.num;
        $(this).find('.num').html(arguments.callee.num);
    });
});