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
    "url": "http://h6.duchengjiu.top/shop/api_goods.php?pagesize=102 ",
    "type": "get",
    "dataType": "JSON",
    "success": function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var obj = response.data[i];
            console.log(obj.goods_id);
            if(i > 0 && i < 7){
            		$("#shop-content").append('<li class="col-xs-6 hot-shop"><a href="detail.html?goods_id='+obj.goods_id+'"><img src="'+ obj.goods_thumb +'" /><span>'+obj.goods_name+'</span><br/><em>¥：'+ obj.price +'</em></a></li>');
        		}
            if(i > 7 && i < 16) {
            		$("#tone").append('<li><a href="detail.html?goods_id='+obj.goods_id+'"><img src="'+obj.goods_thumb+'"><span>'+ obj.goods_name +'</span></a></li>');
            }
            if(i > 16 && i < 23){
            		$("#classifyss").append('<li><a href="detail.html?goods_id='+obj.goods_id+'"><img src="'+obj.goods_thumb+'"/><span>'+ obj.goods_name +'</span><em>¥：'+ obj.price +'</em></a></li>');
            }
            if(i > 23) {
            		$("#last-shop").append('<li><a href="detail.html?goods_id='+obj.goods_id+'"><img src="'+obj.goods_thumb+'"/><p>'+ obj.goods_name +'</p><em>¥：'+ obj.price +'</em></a></li>')
            }
        }
    }
});
