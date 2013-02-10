// Rishi Kapadia & Robert 
// 2-9-13
dcFood = {"Foothill":{'breakfast':['fries']}};
prefs = {"fries":5};
function Rating(dcFood, prefs){

<<<<<<< HEAD
	var result = {};  
		// dictionary of dictionaries to contain ratings for each site/mealtime
	for (var site in dcFood.keys)
=======
function Rating(foodGroup, prefs){

	var result = {};  
		// dictionary of dictionaries to contain ratings for each site/mealtime

	for (var site in foodgroup.keys) //For each site..
>>>>>>> fe7b9cffee7a547749f632e44e99f7b7f6f063e9
	{
		var items = 0;
		result[site] = {};
		
		for (var mealTime in dcFood[site])    //Breakfast, Lunch, and Dinner
		{
			result[site][mealTime] = 0;    //total rating so far
			for (int i = 0; i<dcFood[site][mealTime].length;i++)
			{
				curr = dcFood[site][mealTime][i];
				result[site][mealTime] += prefs[curr];
				items++;
			}
		}
		if(items == 0){
			result[site][mealTime] = "Closed";
		}
		result[site][mealTime] /= resultMath.sqrt(items); //determine projection
		result[site][mealTime]/= (items*5/resultMath.sqrt(items)) * 5 + 5; //actual rating
			//dividing by vector magnitude
	}
	return result;
}
var x = Rating(dcFood, prefs);
document.write(x);



/* OUTPUT
 *  result = {site1: {'Breakfast': #, 'Lunch': #, 'Dinner': #},
 *			  site2: {...},
 *			  site3: {...}
 *            ...}
 */
