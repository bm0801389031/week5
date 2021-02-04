//function declaration name digitize with parameter n
function digitize(n){
/*return string()[to create a new string object of our number,
that way it can be split with our split method] 
with parameter n, split method with parameter 'quotes no space'
[that way it will split each character in the string],
map method with parameter Number[the number parameter gives us
an array of numbers instead of an array of strings(this is needed
because my previous split() method terned the array into  
an array of strings)],
reverse method with no parameter[reverses an array]*/
	return String(n).split('').map(Number).reverse()
}