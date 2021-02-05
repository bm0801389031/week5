//declare function, name countPositivesSumNegatives with
//parameter input
function countPositivesSumNegatives(input) {
/*if input comparison operator: equalto is null
logical operator OR [if either are true execute local block],
input.length comparison operator: equalto 0 execute code block
*/
	if (input == null || input.length == 0)
//return empty string [];
		return [];
//variable statement named positive assigned to 0;
var positive = 0;
//variavle statement named negative assigned to 0;
var negative = 0;
/*for loop variable i assigned to 0, l assigned 
to length property of length global parameter [you can have
an assignment expression or variable declaration as the initialization];
condition: i less than l; final-expression: plusplus i*/
for (var i=0, l=input.length; i<l; ++i){
//statement block if (input[i] is greater than 0)
	if (input[i] > 0)
//plusplus operator positive [this adds all the integers, as values of 1]
		++ positive;
//else negative += input[i] [this adds all the negative numbers]
	else negative += input[i];
}
//then a simple return of an array with the first value being positive
//variable and the second value being negative variable;
	return [positive, negative];
}