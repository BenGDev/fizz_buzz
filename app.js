// count from 1 - 100
// if NOT divisble by 3 and 5, display the number
// if divisble by 3 display 'fizz'
// if divisble by 5 display 'buzz'
// if divisble by 3 and 5 display 'fizzbuzz'

$(document).ready(function() {
	myFunction(number); 
}); 

function myFunction(number) {
	for (var i = 1; i <= number; i++) {
		
		if (i % 3 == 0) {
			document.write("<br/>fizz");
		}
		else if (i % 5 == 0) {
			document.write("<br/>buzz");
		}
		else if (i % 15 == 0) {
			document.write("<br/>fizzbuzz"); 
		}
		else {
		 	document.write("<br/>" + i);
		}
	}
};

var number = prompt("Please enter a number", "0 - 100");
console.log(number);