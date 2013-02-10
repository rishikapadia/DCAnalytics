var DCURL="http://services.housing.berkeley.edu/FoodPro/dining/static/todaysentrees.asp"

// where all the magic happens!
var parsed;
function parserWrapper(data){
	parsed = parser(data);
	var all_food_list = allFood(parsed);
	//var pref_list = code_name(all_food_list);
	populate(all_food_list); 
	//var rating_list = rating(parsed, pref_list); // work with this for UI
}

function submit(){
	pref_list = save();
	var rating_list = rating(parsed, pref_list);
	analyze(rating_list);
}


function getRawHtml(url,onLoad){
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
		}
	});
	
}

function getLineArrayHtml(url, onLoad){
	getRawHtml(url,function(data){onLoad(toLineArray(data))});
}

function toLineArray(data){
	return data.split("\n");
}

// creates dictionary from place to food, given lines of HTML separated by \n
function parser(input)
{
	crossroads_breakfast = meal(input, "pickMenu.asp?locationNum=01", "name=\"Breakfast\"");
	crossroads_lunch = meal(input, "pickMenu.asp?locationNum=01", "name=\"Lunch\"");
	crossroads_dinner = meal(input, "pickMenu.asp?locationNum=01", "name=\"Dinner\"");

	ckc_breakfast = meal(input, "pickMenu.asp?locationNum=04", "name=\"Breakfast\"");
	ckc_lunch = meal(input, "pickMenu.asp?locationNum=04", "name=\"Lunch\"");
	ckc_dinner = meal(input, "pickMenu.asp?locationNum=04", "name=\"Dinner\"");

	cafe_breakfast = meal(input, "pickMenu.asp?locationNum=03", "name=\"Breakfast\"");
	cafe_lunch = meal(input, "pickMenu.asp?locationNum=03", "name=\"Brunch\"");
	cafe_dinner = meal(input, "pickMenu.asp?locationNum=03", "name=\"Dinner\"");

	foothill_breakfast = meal(input, "pickMenu.asp?locationNum=06", "name=\"Breakfast\"");
	foothill_lunch = meal(input, "pickMenu.asp?locationNum=06", "name=\"Lunch\"");
	foothill_dinner = meal(input, "pickMenu.asp?locationNum=06", "name=\"Dinner\"");

	return {"Foothill":
		{"breakfast": foothill_breakfast, "lunch": foothill_lunch, "dinner": foothill_dinner},
		"CKC":
		{"breakfast": ckc_breakfast, "lunch": ckc_lunch, "dinner": ckc_dinner},
		"Cafe 3":
		{"breakfast": cafe_breakfast, "lunch": cafe_lunch, "dinner": cafe_dinner},
		"Crossroads":
		{"breakfast": crossroads_breakfast, "lunch": crossroads_lunch, "dinner": crossroads_dinner}}
}

//helper for function parser
function meal(input, place, type)
{
 
	var output = [];
	for(var i = 0; i < input.length; i++)
	{
		if((input[i].indexOf(place) != -1) && (input[i].indexOf(type) != -1))
		{
			for(var j = i + 1; (input[j].indexOf("<a href=") != -1); j++)
			{
				output.push(input[j].substring(input[j].indexOf("color=") + 16, input[j].length - 16));
			}
		}
	}
	return output;
}


function sorcery(n){
	return Math.round(n*10)/10
}

// calculates rating for each meal time for each dining hall, given dictionary of place to food and dictionary of preferences
function rating(dcFood, prefs) {

	var result = {};  // dictionary of dictionaries to contain ratings for each site/mealtime

	for (var site in dcFood) //For each site..
	{
		result[site] = {};
		
		for (var mealTime in dcFood[site])    //Breakfast, Lunch, and Dinner
		{
			var items = 0;
			result[site][mealTime] = 0;    //total rating so far
			for (var i = 0; i < dcFood[site][mealTime].length; i++)
			{
				curr = dcFood[site][mealTime][i];
				result[site][mealTime] += prefs[curr];
				items++;
			}
			if(items == 0)
			{
				result[site][mealTime] = "Closed";
			}
			else
			{
				result[site][mealTime] /= Math.sqrt(items); //determine projection
				result[site][mealTime] = sorcery(result[site][mealTime] / (items*5/Math.sqrt(items)) * 5 + 5); //actual rating
				//dividing by vector magnitude
			}
		}
	}
	return result;
}


// input: dictionary from places to food. output: list of all food, excluding duplicates
function allFood(parsed)
{
	var list = [];
	for (var place in parsed)
	{
		for (var time in parsed[place])
		{
			for (var i = 0; i < parsed[place][time].length; i++)
			{
				current_element = parsed[place][time][i];
				if(list.indexOf(current_element) == -1)
				{
					list.push(current_element);
				}
			}
		}
	}
	return list;
}

getLineArrayHtml(DCURL, parserWrapper);
