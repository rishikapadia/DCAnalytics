var DCURL="http://services.housing.berkeley.edu/FoodPro/dining/static/todaysentrees.asp"

function getRawHtml(url,onLoad,onFail=function(data){}){
	var data=null;
	$.ajax({
		url: url,
		type: 'GET',
		success: function(res) {
			data = res.responseText;
			onLoad(data);
		},
		failure: function(res){
			data="FAILURE";
			onFail(data);
		}
	});
}

function getLineArrayHtml(url, onLoad, onFail = function(data){}){
	getRawHtml(url,function(data){onLoad(toLineArray(data))},onFail);
}

function toLineArray(data){
	return data.split("\n");
}

getLineArrayHtml(DCURL,parser);
