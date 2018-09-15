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



// 14. Write a JavaScript exercise to get the extension of a filename.

extension("exercice.php");

function extension(filename){

	console.log(filename.split(".").pop());
}




// 15. Write a JavaScript program to get the difference between a given number and 13, 
//     if the number is greater than 13 return double the absolute difference.


diference(13);


function diference(number){

	var main = parseFloat(number);
	var userVal = parseFloat(prompt("Insert value:", "16"));

	userVal >= main ? console.log("Result: "+ Math.abs(userVal-main)*2) : console.log(main - userVal); 


}



// 16. Write a JavaScript program to compute the sum 
//     of the two given integers. If the two values are same, then returns triple their sum. 



sum();

function sum(){

	var num1 = parseFloat(prompt("Insert the first value:", "15"));
	var num2 = parseFloat(prompt("Insert the second value:", "7"));

	num1 == num2 ? console.log("Result: " + (num1+num2)*3) : console.log("Result: " + (num1+num2));

}



// 17. Write a JavaScript program to compute the absolute difference between a specified 
// number and 19. Returns triple their absolute difference if the specified number is greater than 19



diference();


function diference(){

	var inputNum = parseFloat(prompt("Insert your number", "17"));
	var diference = inputNum - 19;

	inputNum > 19 ? console.log("Your number is higher than 19\nResult: "+ diference*3) : console.log("Your number is lower than 19\nResult: " + diference);


}



// 18. Write a JavaScript program to check two given numbers and return true 
//     if one of the number is 50 or if their sum is 50. 



fifthy();


function fifthy(){

	var num1 = parseFloat(prompt("Insert numer:", "25"));
	var num2 = parseFloat(prompt("Insert numer:", "17"));

	if (num1 == 50 || num2 == 50 || num1+num2 == 50) {
		console.log("True");
		return true;
	}else{
		console.log("False");

		return false;
	}

}




// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.


checkInteger();


function checkInteger(){

	var num = prompt("Insert number", "170");

	if ((Math.abs(100 - num) <= 20) ||
	 (Math.abs(400 - num) <= 20)) {
		console.log("True");
	}else{
		console.log("False");
	}


}



// 20. Write a JavaScript program to check from two given integers, 
//     if one is positive and one is negative. 




function bipolar(x,y){

	return x * y < 0 ?  true : false; 

}


console.log(bipolar(20,-15));


// 21. Write a JavaScript program to create a new string adding 
//     "Py" in front of a given string. If the given string begins with "Py" 
//     then return the original string.





randomString();


function randomString(){

	var letters = "ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuvxz";
	var str = "";

	for( var i = 0; i <= 7; i++ ){
		str += letters.charAt(Math.floor(Math.random()*(letters.length-1)));
	}


	str.substring(0,2) == "Py" ? console.log(str) : console.log("Py"+str);

}



// 22. Write a JavaScript program to remove a character at the specified position 
// of a given string and return the new string.


removeChar();


function removeChar(){

	var str = prompt("Insert string", "dslahfk");
	var replacedChar = str.charAt(Math.floor(Math.random()*(str.length-1)));
	var finalStr = str.replace(replacedChar, '');


	console.log("Original string: "+ str +"\nRemoved character: "+ replacedChar + "\nFinal string: "+ finalStr);
}



// 23. Write a JavaScript program to create a new string from a given string changing the 
// position of first and last characters. The string length must be greater than or equal to 1.


stringChange();

function stringChange(){

	var str = prompt("Insert string", "hello!");
	var finalStr = str.charAt(str.length-1)+ str.substring(1,(str.length-1))+str.charAt(0);

	console.log("Initial string: " + str + "\nFinal string: "+ finalStr);

}



// 24. Write a JavaScript program to create a new string from a given string 
//     with the first character of the given string added at the front and back.



stringChange();

function stringChange(){

	var str = prompt("Insert string", "hello!");
	var finalStr = str.charAt(0)+ str +str.charAt(0);

	console.log("Initial string: " + str + "\nFinal string: "+ finalStr);

}




// 25. Write a JavaScript program check if a given positive number is a 
//     multiple of 3 or a multiple of 7.


console.log(multiple(435));


function multiple(x){


	return (x % 3 == 0 || x % 7 == 0) ? true : false;


}


// 26. Write a JavaScript program to create a new string from a given string taking the last 3 
//     characters and added at both the front and back. The string length must be 3 or more.



stringChange();

function stringChange(){

	var str = prompt("Insert string", "hello!");
	var finalStr = str.substring(str.length-3,str.length-1)+ str +str.substring(str.length-3,str.length);

	console.log("Initial string: " + str + "\nFinal string: "+ finalStr);

}





// 27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.


console.log(javaString());


function javaString(){
	 var str = prompt("Insert string", "hello");

	 return str.substring(0,4) == "java" ? true : false;
}




// 28. Write a JavaScript program to check if one given integer values are 
//     in the range 50..99 (inclusive). Return true if either of them are in the said range.


console.log(range());

function range(){

	var integer = parseInt(prompt("Insert integer:", "15"));

	return (integer >= 50 && integer <= 99) ? true : false;


}





// 29. Write a JavaScript program to check if two given integer values are 
//     in the range 50..99 (inclusive). Return true if either of them are in the said range.


console.log(range());

function range(){

	var integer = parseInt(prompt("Insert integer:", "15"));
	var integer2 = parseInt(prompt("Insert integer:", "40"));

	return (integer >= 50 && integer <= 99 || integer2 >= 50 && integer2 <= 99) ? true : false;


}





// 30. Write a JavaScript program to check if a string "Script" 
//     presents at 5th (index 4) position in a given string, if "Script" presents 
//	   in the string return the string without "Script" otherwise return the original one. 


console.log(script());

function script(){

	var str = prompt("Insert string", "stringexample");
	return str.substring(4,10) == "Script" ? str.replace('Script', '') : str;



}





// 31. Write a JavaScript program to find the largest of three given integers.


console.log(largest());

function largest(){

	var num1 = parseFloat(prompt("Insert first number: ", "234"));
	var num2 = parseFloat(prompt("Insert second number: ", "234"));
	var num3 = parseFloat(prompt("Insert third number: ", "234"));

	list = [num1, num2, num3];

	return list.sort().pop();

}




// 32. Write a JavaScript program to find a value which is nearest to 
//     100 from two different given integer values. 

console.log(nearest());


function nearest(){

	var num1 = parseFloat(prompt("Insert first number: ", "234"));
	var num2 = parseFloat(prompt("Insert second number: ", "234"));

	return Math.abs(100-num1) > Math.abs(100-num2) ? "The closest number to 100 is: "+ num2 : "The closest number to 100 is: "+ num1;

}




// 33. Write a JavaScript program to check if two numbers are both in range 40..60 or in 
//     the range 70..100 inclusive.

var num1 = parseFloat(prompt("Insert first number: ", "234"));
var num2 = parseFloat(prompt("Insert second number: ", "234"));
console.log(inRange(num1,num2));

function inRange(x,y){

	return (x >= 40 && x <= 60 || x >= 70 && x <= 100) && (y >= 40 && y <= 60 || y >= 70 && y <= 100) ? true : false;

}



//  34. Write a JavaScript program to find the larger number from the two given 
//      positive integers, the two numbers are in the range 40..60 inclusive.



var num1 = parseFloat(prompt("Insert first number: ", "234"));
var num2 = parseFloat(prompt("Insert second number: ", "234"));

console.log(larger(num1,num2));

function larger(x,y){

	max_val = 0;

	num1 > num2 ? max_val = num1 : max_val = num2;

	return (x >= 40 && x <= 60 && y >= 40 && y <= 60) ?  max_val : "Numbers not in 40 - 60 range"; 

}




// 35. Write a JavaScript program to check a given string contains 2 to 4 numbers. 


console.log(stringNumbers());


function stringNumbers(){

	var str = prompt("Insert any string: ", "djsl345jkn6");
	var numbers = "0123456789";
	var strNumbers = '';

	for ( var i = 0; i < str.length; i++){
		for ( var j = 0; j < numbers.length; j++){
			str.charAt(i) == numbers.charAt(j) ? strNumbers++ : null;
		}
		
	}

	return strNumbers >= 2 && strNumbers <= 4 ? true : false;

}





// 36. Write a JavaScript program to check if the last digit of the three given positive integers 
//     is same. 


console.log(checkLastDigit());


function checkLastDigit(){

	var num1 = prompt("Insert integer");
	var num2 = prompt("Insert integer");
	var num3 = prompt("Insert integer");

	return (num1.split('').pop() == (num2.split('').pop() && num3.split('').pop())) ? true : false;
}



// 37. Write a JavaScript program to create new string with first 3 characters are in 
//	   lower case. If the string length is less than 3 convert all the characters in upper case. 

var str = prompt("Insert string", "StRing Example");
console.log(convertLowerCase(str));


function convertLowerCase(str){

	return str.length <= 3 ? str = str.toUpperCase() : str = str.substring(0,3).toLowerCase() + str.substring(3, str.length);

}




//  38. Write a JavaScript program to check the total marks of a student in various examinations. 
//      The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the 
//      examination is "Final-exam." the student will get A+ grade if the total marks must be greater than 
//      or equal to 90. Return true if the student get A+ grade or false otherwise.

var marks = parseFloat(prompt("Insert grade"));
var final = confirm("Final Exam?");
console.log(grade(marks,final));

function grade(marks, final){

	return final ? marks > 90 : (marks >= 89 && marks <= 100);

}




// 39. Write a JavaScript program to compute the sum of the two given integers, 
//     If the sum is in the range 50..80 return 65 other wise return 80. 


var num1 = parseFloat(prompt("Insert number"));
var num2 = parseFloat(prompt("Insert number"));
console.log(sum(num1, num2));

function sum(){

	return ((num1 + num2) > 50 && (num1 + num2) < 80)  ? "65" : "80";
}



// 40. Write a JavaScript program to check from two given integers if 
//     either one is 8 or their sum or difference is 8. 


var num1 = parseFloat(prompt("Insert number"));
var num2 = parseFloat(prompt("Insert number"));

console.log(isEight(num1, num2));

function isEight(num1, num2){

	return (num1 == 8 || num2 == 8 || (num1 + num2) == 8 || (num1 - num2) == 8) ? true : false;

}




// 41. Write a JavaScript program to check three given numbers, if the three numbers are same 
//     return 30 otherwise return 40 and if two numbers are same return 20.

var x = parseFloat(prompt("Insert number"));
var y = parseFloat(prompt("Insert number"));
var z = parseFloat(prompt("Insert number"));

console.log(checkEqual(x,y,z));


function checkEqual(){

	if ( x == y && y == z) {
		return 30;
	} else if(x == y || y == z){
		return 20;
	}else{
		return 40;
	}

} 


// 42. Write a JavaScript program to check if three given numbers (integers) are increasing in 
//     strict mode or in soft mode.  
//     Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

var x = parseInt(prompt("Insert number"));
var y = parseInt(prompt("Insert number"));
var z = parseInt(prompt("Insert number"));

console.log(increasing(x,y,z));

function increasing(x,y,z){

	if (x < y && y < z) {
		return "Strict Mode";
	}else if( z > x ){
		return "Soft Mode";
	}else{
		return "Not increasing";
	}

}



// 43. Write a JavaScript program to check from three given numbers 
// (non negative integers) that two or all of them have the same rightmost digit.


var x = prompt("Insert number");
var y = prompt("Insert number");
var z = prompt("Insert number");
console.log(checkRightDigit(x,y,z));


function checkRightDigit(x,y,z){

	return x.split('').pop() == y.split('').pop() && y.split('').pop() == z.split('').pop() ? true : false;

}




// 44. Write a JavaScript program to check from three given integers that if a 
//     number is greater than or equal to 20 and less than one of the others.





var x = parseInt(prompt("Insert number"));
var y = parseInt(prompt("Insert number"));
var z = parseInt(prompt("Insert number"));
console.log(checkInteger(x,y,z));


function checkInteger(num1,num2,num3){

	var list = [num1,num2,num3]

	for ( var i = 0; i < list.length-1; i++){
		console.log(list.sort(function(a, b){return a-b})[i]);
		if((list.sort(function(a, b){return a-b})[i]) >= 20){
			return true;
		}
	}

	return false;
	

}





// 45. Write a JavaScript program to check two given integer values and 
//     return true if one of the number is 15 or if their sum or difference is 15.





var x = parseInt(prompt("Insert number"));
var y = parseInt(prompt("Insert number"));
console.log(checkFifteen(x,y));



function checkFifteen(num1,num2){

	return (num1 == 15 || num2 == 15 || (num1 + num2 == 15) || (num1 - num2 == 15)) ? true : false;

}





// 46. Write a JavaScript program to check two given non-negative integers and if one of 
//     the number (not both) is multiple of 7 or 11.


var x = parseInt(prompt("Insert number"));
var y = parseInt(prompt("Insert number"));
console.log(checkNumbers(x,y));




function checkNumbers(x,y){

	if ( x > 0 && y > 0) {

		return (x%7 == 0 || x%11 == 0) && (y%7 != 0 && y%11 != 0) ? true : (y%7 == 0 || y%11 == 0) && (x%7 != 0 && x%11 != 0);

	}else{
		return "Negative numbers";
	}
}




// 47. Write a JavaScript program to check if a number in the range 40..10000 inclusive 
//     presents in two number (in same range).



var x = parseInt(prompt("Insert number"));
var y = parseInt(prompt("Insert number"));
console.log(checkNumbers(x,y));



function checkNumbers(x,y){

    var x_div = parseInt(x / 40),
        x_mod = x % 40,
        y_div = parseInt(y / 40),
        y_mod = y % 40;
    return x_div === y_div || x_mod === y_mod || x_div === y_mod || x_mod === y_div;
}





//  48. Write a JavaScript program to reverse a given string. 



var str = prompt("Insert a String");
console.log(reverseString(str));


function reverseString(str){

	var revervedStr = "";


	for ( var i = str.length-1; i >= 0; i--){     // Another possible solution:  return str.split("").reverse().join("");

		revervedStr += str[i];

	}

	return "String: "+str+"\nReversed: "+ revervedStr;


}




// 49. Write a JavaScript program to replace every character in a given 
//     string with the character following it in the alphabet. 



var str = prompt("Insert a String");
console.log(replaceChar(str));


function replaceChar(str){

	var alpha = "abcdefghijklmnopqrstuvxyza";
		replacedStr = "";

	for (var i= 0; i < str.length; i++) {
		for ( var j = 0; j < alpha.length-1; j++){

				if(str[i] == ' '){
					replacedStr += ' ';
					break;
				}else if(str[i] == alpha[j]){
					replacedStr += alpha[j+1];
					break;
				}
			
		}

	}


	return replacedStr;
}



// 50. Write a JavaScript program to capitalize the first letter of each word of a given string. 


var str = prompt("Insert a String");
console.log(capitalizeStr(str));



function capitalizeStr(str){

	var strWords = str.split(' ');


	for (var i = 0; i < strWords.length; i++) {
		strWords[i] =+  strWords[i][0].toUpperCase() + strWords[i].substr(1);
	}

	return strWords.join(' ');
}






//  51. Write a JavaScript program to convert a given number to hours and minutes. 

var num = prompt("Insert number");
console.log(convertTime(num));


function convertTime(num){

	var hours = Math.floor(num / 60);
		minutes = Math.floor((num % 60));

	return num < 0 ? 0 : "Hours: "+ hours +"\nMinutes: "+ minutes;

}






// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order. 


var input = prompt("Insert string");
console.log(orderString(input));


function orderString(str){

	return str.split('').sort().join('');

}




// 53. Write a JavaScript program to check if the characters a and b are separated by exactly 
//     3 places anywhere (at least once) in a given string.

var str = prompt("Insert a string");
charAB(str);


function charAB(str){

	var spaced = 0;
	var trigger = false;

	for( var i = 0; i < str.length; i++){

		(str[i] == 'a' || str[i] == 'b') ? trigger = true : spaced++;

		if ((str[i] == 'a' || str[i] == 'b') && trigger == true){
			spaced == 3 ? console.log(true) : spaced = 0;
		} 

	}

}





// 54. Write a JavaScript program to count the number of vowels in a given string.


var str = prompt("Insert string");
console.log(checkVowels(str));

function checkVowels(){

	return str.replace(/[^aeiou]/gi, "").length;
}




// 55. Write a JavaScript program to check if a given string contains equal number of 
//     p's and t's present.


var str = prompt("Insert string");
console.log(ptCheck(str));

function ptCheck(){

	return str.replace(/[^t]/gi, "").length == str.replace(/[^p]/gi, "").length ? true : false;
}





// 56. Write a JavaScript program to divide two positive numbers and return a string 
//     with properly formatted commas. 


var number = prompt("First number");
var divided = prompt("Divided by");

console.log(division(number,divided));


function division(num,div){

	var result = parseFloat(num/div).toFixed(2);

	return result.toString().replace(".", ",");


}





// 57. Write a JavaScript program to create a new string of specified copies (positive number) 
//     of a given string. 



var str = prompt("insert string: ");
var num = prompt("Number of copies: ");
console.log(copyStr(str,num));


function copyStr(str,num){

	newstr = str;

	for (var i = 0; i <= num; i++) {
		newstr += str;
	}

	return newstr;
}




// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters 
//     of a given original string. The length of the given string must be 3 and above.




var str = prompt("Insert string");
console.log(newStr(str));


function newStr(str){

	last3Digits = str.substring(str.length-3, str.length);
	newStr = "";

	for ( var i = 0; i < 4; i++){
		newStr += last3Digits;
	}
	
	return str.length > 3 ? newStr : "Error! String needs to be longer."


}





// 59. Write a JavaScript program to extract the first half of a string of even length. 

var str = prompt("Insert string");
console.log(halfStr(str));


function halfStr(str){

	str.length % 2 != 0 ? console.log("String length is NOT and even number cannot proceed.") : console.log("Loading...\n");
	return str.slice(0, str.length/2);

}





// 60. Write a JavaScript program to create a new string without the first and 
//     last character of a given string. 


var str = prompt("Insert string");
console.log(newStr(str));


function newStr(str){

	return str.slice(1, str.length-1);

}




// 61. Write a JavaScript program to concatenate two strings except their first character. 



var str1 = prompt("Insert first string");
var str2 = prompt("Insert second string");
console.log(newStr(str1, str2));



function newStr(str1, str2){

	return str1.slice(1, str1.length) + str2.slice(1, str2.length);


}




// 62. Write a JavaScript program to move last three character to the start of a given string. 
//     The string length must be greater or equal to three. 


var str = prompt("Insert string");
console.log(newStr(str));


function newStr(str){

	return str.length < 3 ? "String length is NOT long enough, cannot proceed." : str.slice(-3, str.length) + str.slice(0, str.length-3);

}





// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
//     The string length must be greater or equal to three.


var str = prompt("Insert string");
console.log(newStr(str));


function newStr(str){

	return str.length % 2 == 0 ? "String length is NOT and odd number, cannot proceed." : str.slice(Math.floor(str.length/2)-1, Math.ceil(str.length/2)+1);

}



// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of 
//     the strings are not equal then remove the characters from the longer string.



var str1 = prompt("Insert string");
var str2 = prompt("Insert string");
console.log(concatStr(str1, str2));


function concatStr(str1, str2){

	var len = Math.min(str1.length, str2.length);

	return str1.slice(0, len) + str2.slice(0, len);



}




//  65. Write a JavaScript program to test if a string end with "Script". 
//      The string length must be greater or equal to 6.


var str = prompt("Insert string");
console.log(testStr(str));


function testStr(str){

	return str.length < 6 ? "String length is too small, cannot proceed." : (/Script$/gi).test(str);

}
 


// 66. Write a JavaScript program to display the city name if the string 
//     begins with "Los" or "New" otherwise return blank. 


var str = prompt("Insert a city name: ");
console.log(testStr(str));


function testStr(str){

	return (/^Los/gi.test(str) || /^New/gi.test(str)) ? str : '';

}



// 67. Write a JavaScript program to create a new string from a given string, removing the 
//     first and last characters of the string if the first or last character are 'P'. 
//      Return the original string if the condition is not satisfied. 


var str = prompt("Insert a string: ");
console.log(testStr(str));


function testStr(str){

	return /^p/gi.test(str) || /p$/gi.test(str) ? str.replace(/p/gi, '') : str;

}




// 68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
//     The string length must be greater or equal to n.



var str = prompt("Insert a string: ");
var num = prompt("Range number: ");
console.log(newStr(str,num));


function newStr(str, num){

	return str.length >= num ? str.slice(0, num) + str.slice(-num, str.length) : "Error! Insert a longer string.";

}





// 69. Write a JavaScript program to compute the sum of three elements of a 
//     given array of integers of length 3.



var num1 = prompt("Insert first number: ");
var num2 = prompt("Insert second number: ");
var num3 = prompt("Insert third number: ");

var numArr = [num1, num2, num3];
console.log(sumNumbers(numArr));


function sumNumbers(numArr){

	return "The sum is: " + (parseFloat(numArr[0]) + parseFloat(numArr[1]) + parseFloat(numArr[2]));
}



// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3. 


var num1 = prompt("Insert first number: ");
var num2 = prompt("Insert second number: ");
var num3 = prompt("Insert third number: ");
var rotate = prompt("Insert number of left rotations: ");

var numArr = [num1, num2, num3];
console.log(rotateArr(numArr,rotate));


function rotateArr(numArr,rot){

	rot % 3 == 0 ? numArr : null;
	rot % 2 == 0 ? numArr = [numArr[2],numArr[0],numArr[1]]: null;
	(rot % 2 != 0 && rot % 3 != 0) ? numArr = [numArr[1],numArr[2],numArr[0]] : null;

	return numArr;

}



// 71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. 
//     The array length must be greater or equal to 1. 


var num = prompt("Length of the random array: ");
console.log(checkOnes(num));


function checkOnes(num){

	var numArr = Array.from({length: num}, () => Math.floor(Math.random() * 10)); 

	return (/^1/gi.test(numArr) || /1$/gi.test(numArr)) ? numArr +'\n'+ true : numArr +'\n'+ false; 
}




// 72. Write a JavaScript program to check if the first and last 
//     elements are equal of a given array of integers length 3. 



var num1 = prompt("First array value: ");
var num2 = prompt("Second array value: ");
var num3 = prompt("Third array value: ");

var numArr = [num1, num2, num3];
console.log(checkEqual(numArr));


function checkEqual(arr){

	return arr[0] == arr[2] ? true : false;
}




// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3. 


var num1 = prompt("First array value: ");
var num2 = prompt("Second array value: ");
var num3 = prompt("Third array value: ");

var numArr = [num1, num2, num3];
console.log(checkEqual(numArr));


function checkEqual(arr){

	return arr.reverse();
}





//  74. Write a JavaScript program to find the larger value between the first or last and set all 
//      the other elements with that value. Display the new array. 


var num = prompt("Length of the random array: ");
maximizeArr(num);


function maximizeArr(num){

	var arr = Array.from({length: num}, () => Math.floor(Math.random() * 10)); 
	console.log('Random generated array: '+arr+'\n');

	arr[0] > arr[arr.length-1] ? arr.fill(arr[0]) : arr.fill(arr[arr.length-1]);
	console.log('New maximized array: '+arr);

}



// 75. Write a JavaScript program to create a new array taking the middle elements of the two 
//     arrays of integer and each length 3.



newArr();


function newArr(){

	var arr = Array.from({length: 3}, () => Math.floor(Math.random() * 10)); 
	var arr2 = Array.from({length: 3}, () => Math.floor(Math.random() * 10)); 
	console.log('Random generated arrays: '+arr+' '+arr2+'\n');

	var newarr = [arr[1], arr2[1]];
	console.log('New array: '+newarr);

}





//  76. Write a JavaScript program to create a new array taking the first and last elements from a given 
//      array of integers and length must be greater or equal to 1. 



var num = prompt("Length of the random array: ");

console.log(createArr(num));


function createArr(num){

	num > 1 ? randomArr = Array.from({length: num}, () => Math.floor(Math.random() * 10)) : console.log("Array length too small!");
	return "Array generated: " +randomArr + "\n" + "New array: " + [randomArr[0], randomArr[randomArr.length-1]];

}




//  77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.


var randomArr = Array.from({length: 2}, () => Math.floor(Math.random() * 10));
console.log(randomArr + '\n');
console.log(checkOneThree(randomArr));


function checkOneThree(randomArr){

	return /[13]/g.test(randomArr) ? true : false;
} 




// 78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3. 



var randomArr = Array.from({length: 2}, () => Math.floor(Math.random() * 10));
console.log(randomArr + '\n');
console.log(checkOneThree(randomArr));


function checkOneThree(arr){

	return (arr.indexOf(1) == -1 && arr.indexOf(3) == -1) ? true : false;
} 




// 79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. 
//    


var num = prompt("Length of the random array: ");

console.log(checkOneThree(num));


function checkOneThree(num){

	var randomArr = Array.from({length: num}, () => Math.floor(Math.random() * 40));
	var count_30 = 0;
	var count_40 = 0;

	for (var i = 0; i < randomArr.length; i++){
		randomArr[i] == 30 ? count_30 ++ : null;
		randomArr[i] == 40 ? count_40 ++ : null;
	}

	console.log(randomArr + "\n");
	console.log("Duplicated 30: " + count_30 + "\n"+ "Duplicated 40: " + count_30 + "\n");
	return (count_30 >=2 || count_40 >= 2) ? true : false;

} 



//  80. Write a JavaScript program to swap the first and last elements of a given array of 
//      integers. 





swapArray();


function swapArray(){

	var randomArr = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
	console.log(randomArr + "\n");

	[randomArr[0], randomArr[randomArr.length - 1]] = [randomArr[randomArr.length - 1], randomArr[0]];

	console.log(randomArr + "\n");
} 



// 81. Write a JavaScript program to add two digits of a given positive integer of length two. 


var num = prompt("Insert you're number: ");
console.log(addNumbers(num));



 function addNumbers(num){

 	return parseInt(num[0]) + parseInt(num[1]);


 }


 

 // 82. Write a JavaScript to add two positive integers without carry.

var num1 = prompt("Insert first number: ");
var num2 = prompt("Insert second number: ");

console.log(addNumbers(num1, num2));


function addNumbers(num1, num2){

	final_val = "";
	num1.length > num2.length ? max_length = num1.length : max_length = num2.length;


	for(var i = 0; i < max_length; i++){

		num1[i] == null ? num1 += '0' : null;
		num2[i] == null ? num2 += '0' : null;

		var add = parseInt(num1[i]) + parseInt(num2[i]);

		add >= 10 ? final_val += Math.floor((add / 10) % 10) : final_val += add;
	}

		return final_val;

}



//  83. Write a JavaScript to find the longest string from an given array of strings.

(function longestString(){


	var array = ['djshd', 'adskjdajsgdg', 'kjkgkhn', 'jhg', 'jdfjkfd', 'dfb', '87uji98uhjiujkuyh'];
	var val = "";

	for (var i = 0; i < array.length; i++) {
		val.length < array[i].length ? val = array[i] : null;
	}

	console.log('Longest string: '+ val);


})(); 



//  84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet. 


(function longestString(){

	var string = prompt("Insert string: ");
	var abc = 'abcdefghijklmnopqrstuvwxyz';
	var newString = '';

	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < abc.length; j++) {
			
			string[i] == abc[j] ? newString += abc[j+1] : null;

		}
		
	}

	console.log('String: '+ string + '\n' + 'Generated string: ' + newString);


})(); 

*/

// 85. Write a JavaScript code to divide an given array of positive integers into two 
//     parts. First element goes to first part, second element goes to second part, and third 
//     element goes to first part and so on. Now compute the sum of two parts and store into an 
//     array of size two.



(function arraySum(){

	var arrLen = prompt("Array length: ");
	var userArr = [];
	var sumArr = [0,0];

	while(arrLen--){
		var val = prompt("Insert value: ");
		userArr.push(val);
	}



	for(var i = 0; i < userArr.length; i++){

		(i % 2 == 0) ? sumArr[0] =  parseInt(userArr[i]) + parseInt(sumArr[0]) : sumArr[1] = parseInt(userArr[i]) + parseInt(sumArr[1]);

	}



	console.log('Final array: ' + sumArr);


})();




































