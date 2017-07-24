var navRight = document.getElementById("nav-right");
navRight.onclick = function() {
   $("#ul-fold").toggle();
}
var cat_id = GetQueryString("goods_id");
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php?goods_id="+cat_id,
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        console.log(response);
        console.log(response.data.length)
        for (var i = 0; i < response.data.length-1; i++) {
            var obj = response.data[i];
            console.log(obj.goods_id);
            $("#shop-setails").append('<img src="'+ obj.goods_thumb +'"/>');
            $("#shop-bottom").append('<p>'+obj.goods_name+'</p><span>'+obj.goods_desc+'</span><em>¥：'+obj.price+'</em>');
            $("#restss").append('<span><i>已选择：</i>'+obj.goods_name+'</span>');
        }
    }
});
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php?pagesize=100 ",
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        console.log(response);
        var num = parseInt(Math.floor(Math.random()*85+1));
        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];
            console.log(obj.goods_id);
            if(i>num) {
            $("#drs-shops").append('<div class="drs-shops"><a href="detail.html?goods_id='+obj.goods_id+'"><img src="'+ obj.goods_thumb +'" /><span>'+obj.goods_name+'</span><br/><p>'+obj.goods_desc+'</p></a></div>');
        		}
       }
    }
});