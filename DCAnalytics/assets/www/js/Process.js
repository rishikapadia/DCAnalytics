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
			for (var key in prefs.keys)
			{
				if(key in foodgroup[site][mealTime]
				{
					result[site][mealTime] += prefs[key];
					items++;            //number of items tally
				}
			}
		}
		result[site][mealTime] /= resultMath.sqrt(items)
			//dividing by vector magnitude
	}
	return result;
}



/* OUTPUT
 *  result = {site1: {'Breakfast': #, 'Lunch': #, 'Dinner': #},
 *			  site2: {...},
 *			  site3: {...}}
 */
