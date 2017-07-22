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
