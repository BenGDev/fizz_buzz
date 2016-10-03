// count from 1 - 100
// if NOT divisble by 3 and 5, display the number
// if divisble by 3 display 'fizz'
// if divisble by 5 display 'buzz'
// if divisble by 3 and 5 display 'fizzbuzz'

$(document).ready(function() {

	for (var i = 1; i <= 100; i++) {
		
		if (i % 3 == 0) {
			console.log("fizz");
		}
		else if (i % 5 == 0) {
			console.log("buzz");
		}
		else if (i % 15 == 0) {
			console.log("fizzbuzz"); 
		}
		else {
		 	console.log(i);
		}
	}

}); 



