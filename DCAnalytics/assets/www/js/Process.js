// Rishi Kapadia & Robert 
// 2-9-13

Function Magnitude(foodGroup, prefs){

	var result == {};
	var site_meal_total = 0;

	for (var site in foodgroup.keys)
	{
		result[site] = {};
		for (var mealTime in site.keys)
		{
			result[site][mealTime] = {};
			for (var key in prefs.keys)
			{
				result[site][mealTime]= prefs[key] * foodGroup[site][mealTime][key];
					//
			}
		}
	}


	return result;
}

/* OUTPUT
 *  result = {site1: {'Breakfast': #, 'Lunch': #, 'Dinner': #},
 *			  site2: {...},
 *			  site3: {...}}
 */


// obj.keys  //dictionary
