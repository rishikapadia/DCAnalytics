// Rishi Kapadia & Robert 
// 2-9-13

Function Magnitude(foodGroup, prefs){

	var result == {};  
		// dictionary of dictionaries to contain ratings for each site/mealtime

	for (var site in foodgroup.keys)
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
		result[site][mealTime] /= resultMath.sqrt(items) //determine projection
		//actual rating
			//dividing by vector magnitude
	}
	return result;
}



/* OUTPUT
 *  result = {site1: {'Breakfast': #, 'Lunch': #, 'Dinner': #},
 *			  site2: {...},
 *			  site3: {...}}
 */
