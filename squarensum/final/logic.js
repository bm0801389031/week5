//set function to squarSum with parameter numbers
function squareSum(numbers){
//declare variable with identifier result and assignment operator = 0
	var result = 0;

/*for loop with three expressions. first expression is declare variable
with identifier i and assignment operator 0; second expression i is
less than numbers.length; third expression is i plus plus. 
*/
	for (var i = 0; i < numbers.length; i++){
/* code block to be executed if the conditions is met;
result plus equals assignment operator number at i spot times
number at i spot 
*/
		result += (numbers[i] * numbers[i]);
	}
//return result 
	return result;
}

/*
javascript variables are containers for storing data values.
*/