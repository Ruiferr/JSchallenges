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


dateFormat()

function dateFormat(){

	var d = new Date();
	var month = d.getMonth();
	var day = d.getDate();
	var year = d.getFullYear();

	document.getElementById("content").innerHTML = day+"-"+month+"-"+year +", "+day+"/"+month+"/"+year;

}

*/

//4. Write a JavaScript program to find the area of a triangle 
//   where lengths of the three of its sides are 5, 6, 7.  


triangleArea()

function triangleArea(){

	var side1 = parseInt(prompt("Insert first triangle side lenght:", "5"));
	var side2 = parseInt(prompt("Insert second triangle side lenght:", "6"));
	var side3 = parseInt(prompt("Insert third triangle side lenght:", "7"));

	var p = (side1 + side2 + side3)/2;
	var area = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));

	document.getElementById("content").innerHTML = "The area of the triangle is: "+ area;
}






























