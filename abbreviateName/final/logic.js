//declare function name abbrevName with parameter name
function abbrevName(name){
/*variable statement named nameArray with assignemt operator =
split method with propery name and parameter of quotes with a space
[so that it will split the name at the space]simicolon to close*/
	var nameArray = name.split(' ');
/*return nameArray, from first array grab [0] and grab first letter [0] 
plus quotes with period in middle of quotes plus nameArray grab second 
array[1] first letter[0], toUpperCase(); method to convert values 
grabed to uper case letters*/
	return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}