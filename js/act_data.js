$(function() {

    //猜你喜欢渲染数据
    maylike();

    function maylike() {
        // console.log(1);
        $.ajax({
            url: $.apiurl.maylike,
            dataType: "json",
            success: function(data) {
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var $newLi = $("<li></li>");
                    $newLi.html(`
               <dt>
                    <a href="#"><img src="` + data[i].img + `" alt="" width="85.5"></a>
                </dt>
                <dd>
                    <a href="">` + data[i].name + `</a><br>
                    <span>` + data[i].enName + `<br>
                    <span>` + data[i].location + `</span><br>
                    <span>` + data[i].type + `</span><br>
                    <span>` + data[i].hot + `</span><br>
                    <span class="red">￥ ` + data[i].price + `</span><br>
                </dd>

               `)
                    $(".maylike_1").append($newLi);
                }
            }
        })
    }
    //性价比数据渲染

    xingjiabi_()

    function xingjiabi_() {
        console.log($.apiurl.xingjiabi);
        $.ajax({
            url: $.apiurl.xingjiabi,
            // url:"http://tools.yufenghen.cn/mock/yemaijiu/xingjiabijson.php",
            // type: "post",
            dataType: "json",
            success: function(data) {
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var newLi = $("<li></li>");
                    newLi.html(`
            <dt>
                    <i class="qianggou"></i>
                    <a href="#">
                        <img src="` + data[i].img + `" alt="">
                    </a>
                </dt>
                <dd>

                    <a href="#">
                        <span class="name">` + data[i].name + `</span><br>
                        <span class="enName">` + data[i].enName + `</span>
                    </a><br>
                    <span class="red">￥ ` + data[i].price + `.0</span>
                </dd>
                <dd>
                        <span class="sale">售出： <b>` + data[i].sold + `</b></span>
                        <span class="haoping">好评： <b>` + data[i].hot + `</b></span>
                </dd>
            `)
                    $(".xingjiabi_data").append(newLi);
                }
            }
        })
    }

    xinpin()

    function xinpin() {
        console.log($.apiurl.xinpin);
        $.ajax({
            url: $.apiurl.xinpin,
            dataType: "json",
            success: function(data) {
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var newLi = $("<li></li>");
                    newLi.html(`
            <dt>
                    <i class="qianggou"></i>
                    <a href="#">
                        <img src="` + data[i].img + `" alt="">
                    </a>
                </dt>
                <dd>

                    <a href="#">
                        <span class="name">` + data[i].name + `</span>
                    </a><br>
                    <span class="red">￥ ` + data[i].price + `.0</span>
                </dd>
                <dd>
                        <span class="sale">售出： <b>` + data[i].sold + `</b></span>
                        <span class="haoping">好评： <b>` + data[i].hot + `</b></span>
                </dd>
            `)
                    $(".xinpin_data").append(newLi);
                }
            }
        })
    }

    //性价比右侧数据
    fill_xingjiabi_right()

    function fill_xingjiabi_right() {
        var $ol = $("#xingjiabi_right").find("ol");
        var $ul = $("#xingjiabi_right").find("ul");
        $.ajax({
            url: "http://localhost/yemajiusql/xingjiabi_right.php",
            dataType: "json",
            success: function(data) {
                console.log(data);
                for (var i = 0; i < 2; i++) {
                    var $newli = $("<li></li>")
                    $newli.html(`
                                        <i>` + data[i].id + `</i>
                <dt class="left">
                    <a href="#">
                        <img src="` + data[i].img + `" alt="">
                    </a>
                </dt>
                <dd class="right">
                    <a href="#" class="name">` + data[i].name + `</a><br>
                    <span class="sold">售出： <b>` + data[i].sold + `</b></span><br>
                    <span class="red">￥ <b>` + data[i].price + `</b></span>
                </dd>
                        `)
                    $ol.append($newli)
                }
                for (var i = 0; i < 8; i++) {
                    var $newli = $("<li></li>")
                    $newli.html(`
                                        <i>` + data[i + 2].id + `</i>
                <dt class="left">
                    <a href="#">
                        <img src="` + data[i + 2].img + `" alt="">
                    </a>
                </dt>
                <dd class="right">
                    <a href="#" class="name">` + data[i + 2].name + `</a><br>
                    <span class="sold">售出： <b>` + data[i + 2].sold + `</b></span><br>
                    <span class="red">￥ <b>` + data[i + 2].price + `</b></span>
                </dd>
                        `)
                    $ul.append($newli)
                }
                //右侧显示隐藏
                $("#xingjiabi_right").find("ul>li").addClass("hide_on")
                $("#xingjiabi_right").find("ul>li").eq(0).removeClass('hide_on')
                xingjiabi_right_hide()

                function xingjiabi_right_hide() {
                    $li = $("#xingjiabi_right").find("ul>li");
                    $li.mouseenter(function() {
                        /* Act on the event */
                        $(this).removeClass("hide_on").siblings('li').addClass('hide_on');
                    });
                }

            }

        })
    }


    //洋酒烈酒右侧
    yangjiuliejiuRight()

    function yangjiuliejiuRight() {
        $.ajax({
            url: $.apiurl.yangjiuliejiuRight,
            dataType: "json",
            success: function(data) {
                $ul = $("#yangjiuliejiu_right").find("ul");
                for (var i = 0; i < data.length; i++) {
                    var newli = $("<li></li>");
                    newli.html(`
        <i>` + data[i].id + `</i>
                    <dt class="left">
                        <a href="#">
                            <img src="` + data[i].img + `" alt="">
                        </a>
                    </dt>
                    <dd class="right">
                        <a href="#" class="name">` + data[i].name + `</a><br>
                        <span class="sold">售出： <b>` + data[i].sold + `</b></span><br>
                        <span class="red">￥ <b>` + data[i].price + `</b></span>
                    </dd>
        `)
                    $ul.append(newli);
                }
                $ul.children('li').eq(0).addClass('hide_on');
                //移入移出事件
                $ul.children('li').mouseenter(function() {
                    $(this).addClass('hide_on').siblings('li').removeClass('hide_on');

                });

            }

        })
    }


    //酒具右侧
    jiujuRight()
    function jiujuRight() {
        $.ajax({
            url: $.apiurl.jiujuRight,
            dataType: "json",
            success: function(data) {
                $ul = $("#jiuju_right").find("ul");
                for (var i = 0; i < data.length; i++) {
                    var newli = $("<li></li>");
                    newli.html(`
        <i>` + data[i].id + `</i>
                    <dt class="left">
                        <a href="#">
                            <img src="` + data[i].img + `" alt="">
                        </a>
                    </dt>
                    <dd class="right">
                        <a href="#" class="name">` + data[i].name + `</a><br>
                        <span class="sold">售出： <b>` + data[i].sold + `</b></span><br>
                        <span class="red">￥ <b>` + data[i].price + `</b></span>
                    </dd>
        `)
                    $ul.append(newli);
                }
                $ul.children('li').eq(0).addClass('hide_on');
                //移入移出事件
                $ul.children('li').mouseenter(function() {
                    $(this).addClass('hide_on').siblings('li').removeClass('hide_on');

                });

            }

        })
    }
    //中国白酒右侧
    zhongbaiRight()

    function zhongbaiRight() {
        var $ol = $("#xingjiabi_zhongbai_right").find("ol");
        var $ul = $("#xingjiabi_zhongbai_right").find("ul");
        $.ajax({
            url: $.apiurl.zhongbaiRight,
            dataType: "json",
            success: function(data) {
                console.log(data);
                for (var i = 0; i < 2; i++) {
                    var $newli = $("<li></li>")
                    $newli.html(`
                                        <i>` + data[i].id + `</i>
                <dt class="left">
                    <a href="#">
                        <img src="` + data[i].img + `" alt="">
                    </a>
                </dt>
                <dd class="right">
                    <a href="#" class="name">` + data[i].name + `</a><br>
                    <span class="sold">售出： <b>` + data[i].sold + `</b></span><br>
                    <span class="red">￥ <b>` + data[i].price + `</b></span>
                </dd>
                        `)
                    $ol.append($newli)
                }
                for (var i = 0; i < 8; i++) {
                    var $newli = $("<li></li>")
                    $newli.html(`
                                        <i>` + data[i + 2].id + `</i>
                <dt class="left">
                    <a href="#">
                        <img src="` + data[i + 2].img + `" alt="">
                    </a>
                </dt>
                <dd class="right">
                    <a href="#" class="name">` + data[i + 2].name + `</a><br>
                    <span class="sold">售出： <b>` + data[i + 2].sold + `</b></span><br>
                    <span class="red">￥ <b>` + data[i + 2].price + `</b></span>
                </dd>
                        `)
                    $ul.append($newli)
                }
                //右侧显示隐藏
                $("#xingjiabi_zhongbai_right").find("ul>li").addClass("hide_on")
                $("#xingjiabi_zhongbai_right").find("ul>li").eq(0).removeClass('hide_on')
                xingjiabi_right_hide()

                function xingjiabi_right_hide() {
                    $li = $("#xingjiabi_zhongbai_right").find("ul>li");
                    $li.mouseenter(function() {
                        /* Act on the event */
                        $(this).removeClass("hide_on").siblings('li').addClass('hide_on');
                    });
                }

            }

        })
    }


    //陈年老酒右侧
    chennianRight();

    function chennianRight() {
        var $ol = $("#xingjiabi_chennian_right").find("ol");
        var $ul = $("#xingjiabi_chennian_right").find("ul");
        $.ajax({
            url: $.apiurl.zhongbaiRight,
            dataType: "json",
            success: function(data) {
                console.log(data);
                for (var i = 0; i < 2; i++) {
                    var $newli = $("<li></li>")
                    $newli.html(`
                                        <i>` + data[i].id + `</i>
                <dt class="left">
                    <a href="#">
                        <img src="` + data[i].img + `" alt="">
                    </a>
                </dt>
                <dd class="right">
                    <a href="#" class="name">` + data[i].name + `</a><br>
                    <span class="sold">售出： <b>` + data[i].sold + `</b></span><br>
                    <span class="red">￥ <b>` + data[i].price + `</b></span>
                </dd>
                        `)
                    $ol.append($newli)
                }
                for (var i = 0; i < 8; i++) {
                    var $newli = $("<li></li>")
                    $newli.html(`
                                        <i>` + data[i + 2].id + `</i>
                <dt class="left">
                    <a href="#">
                        <img src="` + data[i + 2].img + `" alt="">
                    </a>
                </dt>
                <dd class="right">
                    <a href="#" class="name">` + data[i + 2].name + `</a><br>
                    <span class="sold">售出： <b>` + data[i + 2].sold + `</b></span><br>
                    <span class="red">￥ <b>` + data[i + 2].price + `</b></span>
                </dd>
                        `)
                    $ul.append($newli)
                }
                //右侧显示隐藏
                $("#xingjiabi_chennian_right").find("ul>li").addClass("hide_on")
                $("#xingjiabi_chennian_right").find("ul>li").eq(0).removeClass('hide_on')
                xingjiabi_right_hide()

                function xingjiabi_right_hide() {
                    $li = $("#xingjiabi_chennian_right").find("ul>li");
                    $li.mouseenter(function() {
                        /* Act on the event */
                        $(this).removeClass("hide_on").siblings('li').addClass('hide_on');
                    });
                }

            }

        })
    }

    //洋酒烈酒数据渲染
    $(".yangjiuliejiu_data").fillData($.apiurl.yangjiuliejiu, "json");
    //中国白酒性价比
    $(".xingjiabi_zhongbai_data").fillData($.apiurl.zhongbaiXingjiabi, "json");
    //中白新品
    $(".xinpin_zhongbai_data").fillData($.apiurl.zhongbaiXinpin, "json");

    //陈年性价比
    $(".xingjiabi_chennian_data").fillData($.apiurl.chennianxingjiabi, "json");
    //陈年新品
    $(".xinpin_chennian_data").fillData($.apiurl.chennianxinpin, "json");
    //酒具
    $(".jiuju_data").fillData($.apiurl.jiuju,"json");




    //下面试入口函数结尾
})