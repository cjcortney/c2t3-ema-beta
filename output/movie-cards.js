function jsFunction(value) {
$("div#"+value+".card").show();
$("div.card").not("#"+value).hide();
if(value=="All")
    $("div.card").show();
};