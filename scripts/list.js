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
    "url": "http://h6.duchengjiu.top/shop/api_goods.php?cat_id="+cat_id,
    "type": "get",
    "dataType": "JSON",
    "success": function(response) {
        var listVar = document.getElementById("list-var");
        var listcontet = listVar.getElementsByTagName("ul");
        var oLi = document.createElement("li");


    }
})
