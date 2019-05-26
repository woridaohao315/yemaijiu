// ul,.inner,.switch_btn
$.fn.lunbo = function(classname, isCircle, isSwitch) {

    var index = 0;
    var $ul = this.find("ul");
    var w = $ul.children("li").width();
    var $ol = this.find("ol");
    //拼接图片
    $ul.append($ul.children("li:eq(0)").clone());

    if (isCircle) {
        var circleIndex = 0;
    }
    if (isSwitch) {
        var $switch = this.find(".switch_btn");
    }
    var timer = setInterval(autoPlay, 2000);

    function autoPlay() {
        index++;
        if (isCircle) {
            circleIndex++;
        }
        if (circleIndex > $ol.children("li").length - 1) {
            circleIndex = 0;
        }
        $ol.children("li").eq(circleIndex).addClass(classname).siblings("li").removeClass(classname);
        if (index > $ul.children("li").length - 1) {
            $ul.css({
                left: 0
            })
            index = 1;
        }
        $ul.stop().animate({
            left: -index * w
        }, 400)
    }
    // console.log(this);
    // console.log($switch);
    // 移入移出事件
    this.hover(function() {
        clearInterval(timer);
        if (isSwitch) {
            $switch.show();
        }
    }, function() {
        // console.log(2);
        timer = setInterval(autoPlay, 2000);
        if (isSwitch) {
            $switch.hide();
        }
    })
    //左右按钮点击事件
    if (isSwitch) {
        // 右边鼠标的事件
        $switch.children().eq(1).click(function() {
            autoPlay();
        });
        $switch.children().eq(0).click(function() {
            index--;
            if (index < 0) {
                $ul.css({
                    left: -($ul.children("li").length - 1) * w
                })
                index = $ul.children("li").length - 2;
            }
            $ul.animate({
                left: -index * w
            }, 400)
            if (isCircle) {
                circleIndex--;
            }
            if (circleIndex < 0) {
                circleIndex = $ol.children("li").length - 1;
            }
            $ol.children("li").eq(circleIndex).addClass(classname).siblings("li").removeClass(classname);
        })
    }
    // ol小按钮点击事件,这块不知道怎么写出来的
    $ol.children("li").click(function() {
        console.log(this);
        var nowindex = $(this).index()
        index = nowindex - 1;
        if (isCircle) {
            circleIndex = nowindex - 1;
        }
        autoPlay();
    })
}


//封装鼠标移入展开事件



$.fn.hideShow = function(classname) {
    var $li = this.find("ul>li");
    $li.eq(0).addClass(classname);
    $li.mouseenter(function() {
        $(this).addClass(classname).siblings('li').removeClass(classname);
    })
}



//调用数据封装


$.fn.fillData = function(url, dataType) {

    var $ul = this;
    $.ajax({
        url: url,
        dataType: dataType,
        success: function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var $newLi = $("<li></li>");
                $newLi.html(`
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
                        <span class="haoping">好评： <b>` + data[i].haoping + `</b></span>
                </dd>
            `)
                $ul.append($newLi);
            }
        }
    })


}