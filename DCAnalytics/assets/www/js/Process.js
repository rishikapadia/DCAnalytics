// Rishi Kapadia & Robert 
// 2-9-13

Function Magnitude(foodGroup, prefs){

	var result == {};
	var site_meal_total = 0;

	for (var site in foodgroup.keys)//for every site
	{
		var items = 0;
		result[site] = {};
		for (var mealTime in site.keys)
		{
			result[site][mealTime] = 0;
			for (var key in prefs.keys)
			{
				if(key in foodgroup[site][mealTime]){}
					result[site][mealTime] += prefs[key];
					items++;
					//
				}
			}
		}
		result[site][mealTime] /= resultMath.sqrt(items)
	}
	return result;
}

/* OUTPUT
 *  result = {site1: {'Breakfast': #, 'Lunch': #, 'Dinner': #},
 *			  site2: {...},
 *			  site3: {...}}
 */


// obj.keys  //dictionary
