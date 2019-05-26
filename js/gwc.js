$(function() {

    //点击增加数量按键
    $(".subAmount").click(function() {
      var temp=$(this).next().val();
      if(temp<=1){
         return false;
      }
        $(this).next().val(--temp);
        $(this).parent().parent().parent().changeMoney();
        chang_all_money();

        return false;
    });
    $(".addAmount").click(function() {
        var temp=$(this).prev().val();
        $(this).prev().val(++temp);
        $(this).parent().parent().parent().changeMoney();
        chang_all_money();
        return false;

    })
    //点击关闭
    //提示框
   $("a.close_gwc_tips").click(function(){
       $(this).parent().remove();
   })
   //删除商品
   $("a.removeGoods").click(function(){
       var $goods=$(this).parent().parent();
       // console.log(this);
       console.log($goods);
       $("#util-popbox").show();
       $(".close_util_popbox").click(function () {
           $("#util-popbox").hide();
            $goods.remove();
           console.log($("#main_gwc .shangpin").find("tr"));
           if($("#main_gwc .shangpin").find("tr").length===0){
               $("#main_gwc").find(".details").remove();
               $("#detial_down").remove();
                $("#activity").find(".title").remove();
           }
       })
       $(".cancel_util_popbox").click(function () {
           $("#util-popbox").hide();
       })
   })

    //改变总体价格
    function chang_all_money() {
    var total=0.0;
        var moneyArr=document.getElementsByClassName("xj_price");
        var moneyTotal=document.getElementById("oldSumPriceAll0");
        for(var i=0;i<moneyArr.length;i++){
            total+=parseFloat(moneyArr[i].children[0].innerHTML);
        }
        moneyTotal.nextElementSibling.innerHTML=total;
    }

    //改变价格
 $.fn.changeMoney=function(){
        var that=$(this);
     console.log(that);
     var $num=that.find("input.num_goods").val();
     console.log($num);
     var $money=that.children("td.dj_price").children("b").html();
     console.log($money);
     that.find("td.xj_price").children("b").html(parseFloat($num*$money));
    }


})