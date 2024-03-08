//.............Chapter 1.................//

// Question 2
//  alert ("Eroor! Please enter a valid pasword");

// Question 3
// alert (`Welcome to JS Land...  
// Happy Coding!`)

// Question 4
// alert ("Welcome to JS Land...")  

// alert (`Happy Coding! 
// Prevent this page from creating additional dialogs`)

// Question 5

// let descrption = ("Hello... I can run JS through my web browser's console")
// console.log (descrption)


// Question 6
 
//Complete

// Question 7
// let question = ("Practice placement of <script></script> element in following sections of your project in exercise 6:   a. Head      b. Body before your page’s HTML    c. Body inside your page’s HTML    d. Body after your page’s HTML ")

// console.log (question)
  
// let answer = ( "Answer D" )

//  console.log ( answer )

 
//...............Chapter 1 Complete.................... //




//...................Chapter 2.................... //

// Question 1

// Declare a variable called username.

// let username = 
// console.log(username);


// Question 2

//Declare a variable called myName & assign to it a string 
//that represents your Full Name.

// let username = ("Abdul Hannan")

// console.log(username);


// Question 3



// Question 4

//Write a script to save student’s bio data in JS variables and 
//show the data in alert boxes.

// alert  ("Abdul Hannan")
// alert  ("18")
// alert  ("Certified Mobile Apllication Development")


// Question 5

// alert (`PIZZA
// PIZZ
// PIZ
// PI
// P`)


// Question 6

// alert ("My Email Address is ah890944@gmail.com")

// Question 7

// Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// alert ("I am trying to lean from the Book A Smarter Way to Learn JavaScript")


// Question 8




// Question 9

// alert ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")


//...............Chapter 2 Complete.................... //




//....................CHAPTER 3...................//


// Question 1

// let age = `I am 19 Years old` 
// alert (age)



// Question 2

// let visitedCount = "You have visited this site 9 time"
// alert ("You have visited this site 9 time")

// Question 3

// var birthYear = 2005;

// document.write("My birth year is " + birthYear);



// Question 4


// var visitorName = prompt("Please enter your name:");

// var productTitle = prompt("Please enter the product title:");

// var quantity = prompt("Please enter the quantity of products you want to order:");

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");
    


//............CHAPTER 3 Compelete...................//





//....................CHAPTER 4...................//

// Question 1

// Legal variable names
// var myVariable;
// var my_variable;
// var $variable;
// var _variable;
// var variable123;


// Illegal variable names
// var 123variable; // Cannot start with a number
// var my variable; // Cannot contain space
// var my-variable; // Cannot contain hyphen
// var var; // Reserved keyword
// var my@variable; // Cannot contain special characters other than $ and _


// 3. Display rules in the browser
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs.</p>");
// document.write("<p>For example $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign.</p>");
// document.write("<p>For example $name, _name, or name</p>");
// document.write("<p>Variable names are case sensitive.</p>");
// document.write("<p>Variable names should not be JS reserved keywords.</p>");

//............CHAPTER 4 Compelete...................//



//....................CHAPTER 5...................//

// Question 1

// var number1 = prompt("Enter the first number:");
// var number2 = prompt("Enter the second number:");

// var sum = parseFloat(number1) + parseFloat(number2);

// document.write("The sum of " + number1 + " and " + number2 + " is " + sum);


// Question 2

// var number1 = prompt("Enter the first number:");
// var number2 = prompt("Enter the second number:");

// var num1 = parseFloat(number1);
// var num2 = parseFloat(number2);

// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;

// document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
// document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
// document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
// document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");



// Question 3

// a. Declare a variable.
// var myVariable;

// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// // c. Initialize the variable with some number.
// myVariable = 5;

// // d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("Initial value: " + myVariable + "<br>");

// // e. Increment the variable.
// myVariable++;

// // f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is: " + myVariable + "<br>");

// // g. Add 7 to the variable.
// myVariable += 7;

// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: " + myVariable + "<br>");

// // i. Decrement the variable.
// myVariable--;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " + myVariable + "<br>");

// // k. Show the remainder after dividing the variable’s value by 3.
// var remainder = myVariable % 3;

// // l. Output : “The remainder is : 0”.
// document.write("The remainder is: " + remainder + "<br>");



// Question 4

// // Cost of one movie ticket
// var ticketPrice = 600;

// // Number of tickets to buy
// var numberOfTickets = 5;

// // Calculate the total cost
// var totalCost = ticketPrice * numberOfTickets;

// // Display the output
// document.write("Cost of buying " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR");


// Question 5

// Initialize the number for the multiplication table
// var number = 4;

// // Generate the multiplication table
// var table = "<h2>Table of " + number + "</h2>";
// for (var i = 1; i <= 10; i++) {
//     table += number + " x " + i + " = " + (number * i) + "<br>";
// }

// // Display the multiplication table
// document.getElementById("multiplicationTable").innerHTML = table;


// Question 6

// /// Celsius to Fahrenheit conversion function
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// // Fahrenheit to Celsius conversion function
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// // Initial temperatures
// var initialCelsius = 25;
// var initialFahrenheit = 77;

// // Convert initial temperatures
// var initialCelsiusToFahrenheit = celsiusToFahrenheit(initialCelsius);
// var initialFahrenheitToCelsius = fahrenheitToCelsius(initialFahrenheit);

// // Display initial conversions
// document.getElementById("celsiusToFahrenheitOutput").innerHTML = initialCelsius + "°C is " + initialCelsiusToFahrenheit.toFixed(2) + "°F";
// document.getElementById("fahrenheitToCelsiusOutput").innerHTML = initialFahrenheit + "°F is " + initialFahrenheitToCelsius.toFixed(2) + "°C";



// Question 7

// // Store the prices and quantities of items
// var priceItem1 = 50; // Price of item 1
// var priceItem2 = 75; // Price of item 2
// var quantityItem1 = 2; // Ordered quantity of item 1
// var quantityItem2 = 3; // Ordered quantity of item 2
// var shippingCharges = 10; // Shipping charges

// // Compute the total cost
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// // Display the receipt
// document.write("<h2>Shopping Cart</h2>");
// document.write("<p>Price of Item 1: " + priceItem1 + "</p>");
// document.write("<p>Price of Item 2: " + priceItem2 + "</p>");
// document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
// document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
// document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
// document.write("<p><strong>Total Cost: " + totalCost + "</strong></p>");



// Question 8


// // Store total marks and marks obtained by the student
// var totalMarks = 980; // Total marks
// var marksObtained = 804; // Marks obtained

// // Compute the percentage
// var percentage = (marksObtained / totalMarks) * 100;

// // Display the result in the browser
// document.write("<h2>Marks Sheet</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


// Question 9


// // Define the amounts in US dollars and Saudi Riyals
// var usDollars = 10;
// var saudiRiyals = 25;

// // Define the exchange rates
// var exchangeRateUSD = 104.80; // 1 US Dollar = 104.80 Pakistani Rupees
// var exchangeRateSAR = 28;     // 1 Saudi Riyal = 28 Pakistani Rupees

// // Perform the currency conversion and calculate the total in Pakistani Rupees
// var totalInPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

// // Display the result in the browser
// document.write("<h2>Currency in PKR:</h2>");
// document.write("<p>" + totalInPKR  + "</p>");


// Question 10

// // Initialize the variable with some number
// var number = 10;

// // Perform all calculations in a single expression
// var result = ((number + 5) * 10) / 2;

// // Display the result
// console.log("Result:", result);


// Question 11

  // Store the current year in a variable
//   var currentYear = new Date().getFullYear();

//   // Store their birth year in a variable
//   var birthYear = 1990; // For example, assume birth year is 1990

//   // Calculate their possible ages based on the stored values
//   var age1 = currentYear - birthYear;
//   var age2 = age1 - 1; // Subtract 1 if birthday hasn't occurred yet in the current year

//   // Display the ages in the browser
//   document.write("<p>They are either " + age1 + " or " + age2 + " years old.</p>");


// Question 12

// Store the radius of the circle in a variable
// var radius = 5; // For example, assume the radius is 5

// // Calculate the circumference of the circle
// var circumference = 2 * Math.PI * radius;

// // Calculate the area of the circle
// var area = Math.PI * radius * radius;

// // Display the results in the browser
// document.write("<p>Radius of Circle : 2</p>");
// document.write("<p>The circumference is : " + circumference.toFixed(2) + "</p>");
// document.write("<p>The area is : " + area.toFixed(2) + " </p>");


// Question 13

//   // Store your favorite snack into a variable
//   var favoriteSnack = "Chocolate Chip";

//   // Store your current age into a variable
//   var currentAge = 30; // For example, assume the current age is 30

//   // Store a maximum age into a variable
//   var maxAge = 80; // For example, assume the maximum age is 80

//   // Store an estimated amount per day (as a number)
//   var amountPerDay = 2; // For example, assume 2 snacks per day

//   // Calculate how many would you eat total for the rest of your life
//   var yearsRemaining = maxAge - currentAge;
//   var daysRemaining = yearsRemaining * 365;
//   var totalSnacks = daysRemaining * amountPerDay;

//   // Prepare the output message
//   var outputMessage = "<p></p>";
//   outputMessage += "<ul>";
//   outputMessage += "<li> Favorite snack: " + favoriteSnack + "</li>";
//   outputMessage += "<li> Current age: " + currentAge + "</li>";
//   outputMessage += "<li> Maximum age: " + maxAge + "</li>";
//   outputMessage += "<li>Estimated amount per day: " + amountPerDay + "</li>";
//   outputMessage += "<li>Total days remaining: " + daysRemaining + "</li>";
//   outputMessage += "<li>Total snacks needed: " + totalSnacks + "</li>";
//   outputMessage += "</ul>";

//   // Output the result to the screen
//   var outputElement = document.getElementById("output");
//   outputElement.innerHTML = outputMessage;


//............CHAPTER 5 Compelete...................//



//.............Chapter 6-9.................//


// Question 1

// const result = `
// The value of a is: 10<br>
// The value of ++a is: 11<br>
// Now the value of a is: 11<br>
// The value of a++ is: 11<br>
// Now the value of a is: 12<br>
// The value of --a is: 11<br>
// Now the value of a is: 11<br>
// The value of a-- is: 11<br>
// Now the value of a is: 10
// `;

// const resultElement = document.querySelector('#result');
// resultElement.innerHTML = result;


// Question 2






// Question 3


 // Prompt the user to enter their name
//  var name = prompt("Enter your name:");

//  // Greet the user
//  var greeting = "Hello, " + name + "! Welcome to our website.";
//  alert(greeting);



// Question 5

// function displayMultiplicationTable() {
//     // Get the input number from the user
//     var number = document.getElementById("numberInput").value;

//     // If the user didn't enter a number, default to 5
//     if (number === "") {
//       number = 5;
//     }

//     // Generate the multiplication table
//     var table = "<h2>Multiplication Table of " + number + "</h2>";
//     for (var i = 1; i <= 10; i++) {
//       table += number + " x " + i + " = " + (number * i) + "<br>";
//     }

//     // Display the multiplication table in the browser
//     document.getElementById("output").innerHTML = table;
//   }



// Question 6

//   // Define subjects and obtained marks
//   var subject1 = "Mathematics";
//   var subject2 = "Urdu";
//   var subject3 = "English";
//   var totalMarks = 100;
//   var obtainedMarks1 = 85;
//   var obtainedMarks2 = 90;
//   var obtainedMarks3 = 80;

//   // Calculate total obtained marks and percentage
//   var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//   var totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

//   // Display the result in a table format
//   document.write("<table>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
//   document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
//   document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
//   document.write("<tr><td colspan='2'>Total Obtained Marks:</td><td>" + totalObtainedMarks + "</td></tr>");
//   document.write("<tr><td colspan='2'>Percentage:</td><td>" + totalPercentage.toFixed(2) + "%</td></tr>");
//   document.write("</table>");


//............CHAPTER 6-9 Compelete...................//



//.............Chapter 9-11.................//




// Question 1

//  // Prompt the user for city name
//  var cityName = prompt("Enter your city name:");

//  // Check if the entered city is Karachi
//  if (cityName && cityName.toLowerCase() === "karachi") {
//    // If it's Karachi, display the welcome message
//    alert("Welcome to the city of lights!");
//  } else {
//    // If it's not Karachi, display a generic message
//    alert("Welcome!");
//  }


// Question 2

// Prompt the user for their gender
// var gender = prompt("Enter your gender (male/female):");

// // Check the gender and display the appropriate greeting
// if (gender) {
//   if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
//   } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am.");
//   } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
//   }
// } else {
//   alert("No input provided.");
// }


// Question 3
// // Prompt the user to enter the color of the traffic signal
// var signalColor = prompt("Please enter the color of the traffic signal (Red, Yellow, or Green):");

// // Convert the input to lowercase for easier comparison
// signalColor = signalColor.toLowerCase();

// // Display the corresponding message based on the input color
// if (signalColor === "red") {
//   alert("Must Stop");
// } else if (signalColor === "yellow") {
//   alert("Ready to move");
// } else if (signalColor === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid color. Please enter either Red, Yellow, or Green.");
// }



// Question 4


// function checkFuel() {
//     const fuel = parseFloat(document.getElementById("fuel").value);
//     let message;

//     if (fuel < 0.25) {
//         message = "Please refill the fuel in your car";
//     } else {
//         message = "Your fuel level is sufficient.";
//     }

//     document.getElementById("message").innerText = message;
// }

// Question 7

// const secretNumber = Math.floor(Math.random() * 10) + 1;
//         const userGuess = prompt("Enter your guess:");

//         if (userGuess == secretNumber) {
//             alert("Bingo! Correct answer.");
//         } else if (userGuess == secretNumber - 1) {
//             alert("Close enough to the correct answer.");
//         } else {
//             alert("Sorry, that's not correct. The secret number was " + secretNumber + ".");
//         }



// Question 8

// function checkDivisibility() {
//     const number = document.getElementById("number").value;
//     let message;

//     if (number % 3 === 0) {
//         message = "The number is divisible by 3.";
//     } else {
//         message = "The number is not divisible by 3.";
//     }

//     document.getElementById("message").innerText = message;
// }



// Question 9

// function checkEvenOdd() {
//     const number = document.getElementById("number").value;
//     let message;

//     if (number % 2 === 0) {
//         message = "The number is even.";
//     } else {
//         message = "The number is odd.";
//     }

//     document.getElementById("message").innerText = message;
// }


// Question 10


// function checkTemperature() {
//     const temperature = document.getElementById("temperature").value;
//     let message;

//     if (temperature > 40) {
//         message = "It is too hot outside.";
//     } else if (temperature > 30) {
//         message = "The Weather today is Normal.";
//     } else if (temperature > 20) {
//         message = "Today’s Weather is cool.";
//     } else if (temperature > 10) {
//         message = "OMG! Today’s weather is so Cool.";
//     } else {
//         message = "The temperature is below 10 degrees. Bundle up!";
//     }

//     document.getElementById("message").innerText = message;
// }



// Question 11


// function calculate() {
//     const firstNumber = parseFloat(document.getElementById("firstNumber").value);
//     const secondNumber = parseFloat(document.getElementById("secondNumber").value);
//     const operation = document.getElementById("operation").value;
//     let result;

//     if (operation === "+") {
//         result = firstNumber + secondNumber;
//     } else if (operation === "-") {
//         result = firstNumber - secondNumber;
//     } else if (operation === "*") {
//         result = firstNumber * secondNumber;
//     } else if (operation === "/") {
//         if (secondNumber === 0) {
//             result = "Error: Division by zero";
//         } else {
//             result = firstNumber / secondNumber;
//         }
//     } else if (operation === "%") {
//         result = firstNumber % secondNumber;
//     } else {
//         result = "Error: Invalid operation";
//     }

//     document.getElementById("result").innerText = "Result: " + result;
// }



//............CHAPTER 9-11 Compelete...................//














