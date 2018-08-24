/*
// 1. Write a JavaScript program to display the current day and time in the following format.
// Output : 
// Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38


getTime();

function getTime(){

	var d = new Date();
	var day = d.getDay(); 
	var hour = d.getHours() + (d.getHours() >= 12 ? " PM" : " AM");
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	//get day of the week
	var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	//write to html
	document.getElementById("content").innerHTML = "Today is : "+ weekDay[day]+ 
												   "<br> Current time is : " + hour +" : "+ minutes +": "+ seconds+"";

}


// 2. Write a JavaScript program to print the contents of the current window.


printContent();

function printContent(){
	window.print();
}





// 3. Write a JavaScript program to get the current date.
// Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


dateFormat();

function dateFormat(){

	var d = new Date();
	var month = d.getMonth();
	var day = d.getDate();
	var year = d.getFullYear();

	document.getElementById("content").innerHTML = day+"-"+month+"-"+year +", "+day+"/"+month+"/"+year;

}



//4. Write a JavaScript program to find the area of a triangle 
//   where lengths of the three of its sides are 5, 6, 7.  


triangleArea();

function triangleArea(){

	var side1 = parseInt(prompt("Insert first triangle side lenght:", "5"));
	var side2 = parseInt(prompt("Insert second triangle side lenght:", "6"));
	var side3 = parseInt(prompt("Insert third triangle side lenght:", "7"));

	var p = (side1 + side2 + side3)/2;
	var area = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));

	document.getElementById("content").innerHTML = "The area of the triangle is: "+ area;
}




// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
//    removing one letter from the end of the string and attaching it to the front.


stringInverse();


function stringInverse(){

	var string = prompt("Insert a string", "w3resource");
	var inverseString = " ";

	for ( var i = string.length-1; i >= 0; i--){
		inverseString += string[i];
	}
	document.getElementById("content").innerHTML = "Inversed String: "+ inverseString;

}



//6. Write a JavaScript program to determine whether a given year is a 
//   leap year in the Gregorian calendar. 


leapYear();

function leapYear(){
	var year = prompt("Insert a year", "1996");

	year%4 == 0 ? console.log("YES! LEAP YEAR") : console.log("SORRY THAT'S NOT A LEAP YEAR");
}




// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

sundaySearch();

function sundaySearch(){

	for (var year = 2014; year <= 2050; year++) {
			var date = new Date(year, 0, 1);
			var weekday = date.getDay();
			weekday == 0 ? console.log(year + " starts with a Sunday on 1st Jan") : null;
	}

} 




// 8. Write a JavaScript program where the program takes a random integer 
//	  between 1 to 10, the user is then prompted to input a guess number. 
//	  If the user input matches with guess number, the program will display a 
//	  message "Good Work" otherwise display a message "Not matched". 


randomInteger();

function randomInteger(){

	var randomNum = Math.floor((Math.random() * 10));
	var input = prompt("Insert an integer from 0 to 10:", "4");

	while(!(input >= 0 && input <= 10 )){
		input = prompt("Insert an integer from 0 to 10:", "4");
	}

	input == randomNum ? console.log("Epic win!\ your number: "+input + " generated number: " + randomNum) : console.log("Sorry try agin!\ your number: "+input + " generated number: " +randomNum);


}




// 9. Write a JavaScript program to calculate days left until next Christmas.

christmas();

function christmas(){

	var today = new Date();
	var year = today.getFullYear();

	var christmas = new Date(year, 31, 11);
	var daysUntilChristmas = Math.floor((christmas.getTime() - today.getTime()) / (24*60*60*1000));
	

	document.getElementById("content").innerHTML = daysUntilChristmas + " DAYS UNTIL CHRISTAMS";

}





// 10. Write a JavaScript program to calculate multiplication and division 
//     of two numbers (input from user).


function calculate(operation){

	var num1 = parseInt(document.getElementsByTagName("input")[0].value);
	var num2 = parseInt(document.getElementsByTagName("input")[1].value);

	operation == "multiply" ? console.log(num1 * num2) : console.log(num1 / num2);
	

}




// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Expected Output : 
// 60°C is 140 °F
// 45°F is 7.222222222222222°C 


function temperatureConvert(){

	var number = document.getElementById("val").value;
	var unit = document.getElementById("unit").value;
	var answer = document.getElementById("temperatureConverted");

	unit == "celcius" ? answer.innerHTML = (number/5*9)+32 + " Fahrenheit"  : answer.innerHTML = ((number-32)/9)*5 + " Celcius";
}





// 12. Write a JavaScript program to get the website URL (loading page).


getURL();

function getURL(){
	console.log(document.URL);
	return document.URL;
}



// 13. Write a JavaScript exercise to create a variable using a user-defined name.


variable();


function variable(){

	var name = prompt("Insert your name:", "John");
	var number = Math.floor(Math.random()*10);

	this[name] = number;
	console.log("Your name: "+ name + "\n"+ "Generated number: " + this[name]);
}

*/


// 14. Write a JavaScript exercise to get the extension of a filename.

extension("exercice.php");

function extension(filename){

	console.log(filename.split(".").pop());
}















































































