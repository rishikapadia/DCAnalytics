// Rishi Kapadia & Robert 
// 2-9-13

function Rating(foodGroup, prefs){

	var result = {};  
		// dictionary of dictionaries to contain ratings for each site/mealtime

	for (var site in foodgroup.keys) //For each site..
	{
		var items = 0;
		result[site] = {};
		
		for (var mealTime in site.keys)    //Breakfast, Lunch, and Dinner
		{
			result[site][mealTime] = 0;    //total rating so far
			for (var key in foodgroup[site][mealTime].keys)
			{
				if(key in prefs.keys)
				{
					result[site][mealTime] += prefs[key];
				}
				items++;
			}
		}
		if(items = 0){
			result[site][mealTime] = "Closed"
		}
		result[site][mealTime] /= resultMath.sqrt(items); //determine projection
		result[site][mealTime]/= (items*5/resultMath.sqrt(items)) * 5; //actual rating
			//dividing by vector magnitude
	}
	return result;
}

//meal is 
Function mealRating(meal, foodgroup, prefs){
	AllResults = Rating(foodgroups,prefs);
	for (site in foodgroup.keys){
		//print file.
	}
}


/* OUTPUT
 *  result = {site1: {'Breakfast': #, 'Lunch': #, 'Dinner': #},
 *			  site2: {...},
 *			  site3: {...}
 *            ...}
 */
