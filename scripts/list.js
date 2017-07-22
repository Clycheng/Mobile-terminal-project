var shopList = document.getElementById("shop-list");
var listinner = shopList.getElementsByTagName("a");
//获取商品分类列表
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_cat.php",
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];
            listinner[i].innerText = obj.cat_name;
            listinner[i].href = "list.html?id=" + obj.cat_id;
        }
    }
});
//获取内容列表
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
var id = getUrlParam("url");
console.log(id);
// $.ajax({
//     "url": "http://h6.duchengjiu.top/shop/api_goods.php?cat_id="+token
// })
