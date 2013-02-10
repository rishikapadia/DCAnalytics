
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
          return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}



function generateUserDisplayHTML(mealRating, meal){
    
}
function appendUserDisplayHTML(html){
	document.getElementByID("userdisplay").html
}

function generateHTML(color, site, rating){

}

