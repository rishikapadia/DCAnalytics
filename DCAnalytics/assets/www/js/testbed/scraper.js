function getRawHtml(url,onLoad,onFail=function(){}){
	var data=null;
	$.ajax({
		url: url,
		type: 'GET',
		success: function(res) {
			data = res.responseText;
			onLoad(toLineArray(data));
		},
		failure: function(res){
			data="FAILURE";
			onFail(data);
		}
	});
}
function toLineArray(data){
	return data.split("\n");
}
