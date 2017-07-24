var classButton = document.getElementById("classify-button");
var classify = document.getElementById("classify");
console.log (classify);
// var a =1;

classButton.onclick = function() {
   $("#classify").toggle();
}
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_cat.php ",
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];
            $("#classify-box").append('<li class="col-xs-3"><a href = "list.html?id='+ obj.cat_id +'">' +obj.cat_name+ '</a></li>');
        }
    }
});
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php?pagesize=100 ",
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];
            $("#shop-content").append('<li id = "'+ obj.goods_id + '"class="col-xs-3  hot-shop"><img src="'+ obj.goods_thumb +'" /><span>'+obj.goods_name+'</span><br/><em>¥：'+ obj.price +'</em></li>');
        }
    }
})
$(".hot-shop").click(function() {
	console.log(1);
})
