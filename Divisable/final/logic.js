/*
Declare function name inDivisible with parameter (argument) n,x,y
*/
function isDivisible(n, x, y) {
/*
return n modulus (devision remainder)[[This is for finding 
to see if there is a remainder to the dividen, in our case 
to find if a number is divisable. for a nummber to be devisable, 
there can not be a remainder]] with x, comparison 
operator[[comparison opp is almost like if it equals]] 
equal value and equal type to 0, logical operator[[ is an 
object that says and this must also be true for the next 
parameter to land on the first argument]] and, n modulus 
y comparison operator equal value and equal type to zero, 
conditional operator[[turnary works with logical operator 
and if the items in logical operator are true it returns 
the first value, being true]] true colon false
*/
	return (n % x === 0 && n % y === 0) ? true : false;
}