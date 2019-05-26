$(function() {


    //首页轮播图
    banner_1_header();

    function banner_1_header() {
        var $ul = $("#nav_carousel").children("ul");
        var $ol = $("#nav_carousel").children("ol");
        // console.log($ul);
        var $index = 0;
        $ul.children("li").eq($index).show().siblings('li').hide();
        var timer = setInterval(autoPlay, 2000);

        function autoPlay() {
            $index++;
            if ($index > $ul.children('li').length - 1) {
                $index = 0;
            }
            $ul.children("li").eq($index).stop().fadeIn(400).siblings('li').stop().fadeOut(400);
            $ol.children('li').eq($index).addClass("current").siblings('li').removeClass("current");
        }
        //点击事件
        $ol.children('li').hover(function() {
            $(this).addClass('current').siblings('li').removeClass('current');
            $ul.children("li").eq($(this).index()).stop().fadeIn(400).siblings('li').stop().fadeOut();
            $index = $(this).index();
        })

        //鼠标移入移出事件
        $("#nav_carousel").mouseenter(function() {
            clearInterval(timer);
        });
        $("#nav_carousel").mouseleave(function() {
            timer = setInterval(autoPlay, 2000);
        })
    }

    //nav_down 下面tab栏切换事件
    $("#nav_down").find(".top>li").hover(function() {
        $(this).css({
            backgroundColor: '#fff',
            borderBottom: 'none'
        }).siblings('li').css({
            backgroundColor: '#ddd',
            borderBottom: '1px solid #BEB6A9'
        });;

        $("#nav_down").find(".down>ol").eq($(this).index()).show().siblings('ol').hide();
    }, function() {
        /* Stuff to do when the mouse leaves the element */
    });
    //nav_down 下面tab栏滚动事件
    $("#nav_down").find("._right>.top li").mouseenter(function() {
        var move = $("._right>.down>ul").height()
        console.log(move);
        console.log($(this).index());
        console.log($(this).index() * move);
        $("#nav_down").find("._right>.down>ul").stop().animate({
            "margin-top": -$(this).index() * move
        });
    })


    //刚刚好评过的,轮播图

    $(".banner2_lunbo_3").lunbo("current", true);


    //品牌汇轮播图
    //
    //
    banner_3_lunbo();

    function banner_3_lunbo() {
        var $li = $(".banner_3").find("li");
        var index = 0;
        var timer = setInterval(autoplay, 2000)
        $(".banner_3").find("li").hover(function() {
            index = $(this).index() - 1;
            clearInterval(timer);
            autoplay();
        }, function() {
            timer = setInterval(autoplay, 2000);
        })

        function autoplay() {
            index++;
            if (index > $li.length - 1) {
                $li.eq(0).stop().animate({ "width": "450px" }, 400).siblings('li').stop().animate({ "width": "150px" }, 400);
                index = 0;
            }
            $li.eq(index).stop().animate({ "width": "450px" }, 400).siblings('li').stop().animate({ "width": "150px" }, 400)
        }
    }

    //进口葡萄酒轮播图
    $(".banner_4").lunbo("current", true);

    //洋酒烈酒轮播图
    $(".banner_5").lunbo("current", true);

    //中国白酒轮播图
    $(".banner_6").lunbo("current", true);

    //陈年老酒轮播图
    $(".banner_7").lunbo("current",true);

    //酒具轮播图
    $(".banner_8").lunbo("current",true);



    //洋酒烈酒右侧显示隐藏
    $("#yangjiuliejiu_right").hideShow("hide_on");
    // console.log($("#yangjiuliejiu_right"));
    // $("#yangjiuliejiu_right").haha();



    // 下面是入口函数结尾
})