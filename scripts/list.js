var shopList = document.getElementById("shop-list");
var listinner = shopList.getElementsByTagName("a");
//获取商品分类列表
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_cat.php",
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        // console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];
            listinner[i].innerText = obj.cat_name;
            listinner[i].href = "list.html?id=" + obj.cat_id;
        }
    }
});
//获取内容列表
    var cat_id = GetQueryString("id");
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_goods.php?cat_id"+cat_id,
        "type": "get",
        "dataType": "JSON",
        "success": function(response) {
            console.log(response);
            var length = response.data.length;
            //获取节点 并且克隆对应的数量
            var shopList = document.querySelector(".shop-list-content");
            for (var i = 1; i < length; i ++){
                 var cNode = shopList.cloneNode(true);
                $("#shop-list-warp").append(cNode);
            }
            //获取新的列表内容 存倒数组
            var newShopList = document.querySelectorAll(".shop-list-content");
            var oImgArr = [];
            var oAArr = [];
            var oHArr = [];
            var oPArr = [];
            var priceArr = [];
            for (var j = 0; j < newShopList.length; j ++){
                var oA = newShopList[j].getElementsByTagName("a")[0];
                var oImg = newShopList[j].getElementsByTagName("img")[0];
                var oH = newShopList[j].getElementsByTagName("h3")[0];
                var oP = newShopList[j].getElementsByTagName("p")[0];
                var price = newShopList[j].getElementsByTagName("b")[0];
                oAArr.push(oA);
                oImgArr.push(oImg);
                oHArr.push(oH);
                oPArr.push(oP);
                priceArr.push(price);
            }
            console.log(oAArr);
            for (var k = 0; k < response.data.length; k ++) {
                var obj = response.data[k];
              oAArr[k].href = "detail.html"+obj.cat_id;
              oImgArr[k].src = obj.goods_thumb;
              oHArr[k].innerText = obj.goods_desc;
              oPArr[k].innerText = obj.goods_name;
              priceArr[k].innerText = "￥" + obj.price;
            }
        }
    });
//懒加载
$(document).scroll(function(){
    var $this =$(this),
        viewH =$(this).height(),//可见高度
        contentH =$(this).get(0).scrollHeight,//内容高度
        scrollTop =$(this).scrollTop();//滚动高度
    //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
    if( scrollTop = viewH-contentH) {
        console.log(1);
    }
});


