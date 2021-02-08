//function declaration named invert
function invert(array){
/*map method with array as the property (function declaration at
the map scope, parameter num arrow function -num[-num is a 
unary negation which in this case returns the oposit of what
ever is passed through it, and iterates through each number
because of the map method] )*/
	array.map(num => -num);
}