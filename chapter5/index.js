// Task 1: Addition of Two Numbers
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// Task 2: Subtraction, Multiplication, Division, and Modulus
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + difference + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + product + "<br>");
document.write("Division of " + num1 + " by " + num2 + " is " + quotient + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + remainder + "<br><br>");

// Task 3: Mathematical Expressions in JavaScript
var myVar;
document.write("Value after variable declaration is " + myVar + "<br>");

myVar = 5;
document.write("Initial value: " + myVar + "<br>");

myVar++;
document.write("Value after increment is: " + myVar + "<br>");

myVar += 7;
document.write("Value after addition is: " + myVar + "<br>");

myVar--;
document.write("Value after decrement is: " + myVar + "<br>");

var remainderAfterDivision = myVar % 3;
document.write("The remainder is: " + remainderAfterDivision);
// task 4:
var ticketPrice = 600;
        var totalTickets = 5;
        var totalCost = ticketPrice * totalTickets;
        document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR<br><br>");
// task 5:
        var number = 4;
        document.write("Table of " + number + "<br>");
        for (var i = 1; i <= 10; i++) {
            document.write(number + " x " + i + " = " + (number * i) + "<br>");
        }
        // Task 6: Temperature Converter
        var celsius = 25;
        var fahrenheit = (celsius * 9/5) + 32;
        document.write(celsius + "°C is " + fahrenheit + "°F<br>");

        var fahrenheitValue = 70;
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        document.write(fahrenheitValue + "°F is " + celsiusValue + "°C<br><br>");

        // Task 7: Shopping Cart System
        document.write("<h2>Shopping Cart</h2>");

        var priceItem1 = 650;
        var priceItem2 = 100;
        var quantityItem1 = 3;
        var quantityItem2 = 7;
        var shippingCharges = 100;

        var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

        document.write("Price of item 1 is " + priceItem1 + "<br>");
        document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
        document.write("Price of item 2 is " + priceItem2 + "<br>");
        document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
        document.write("Shipping Charges " + shippingCharges + "<br><br>");
        document.write("Total cost of your order is " + totalCost);

        // Task 8: Marks Sheet (Percentage Calculation)
        document.write("<h2>Marks Sheet</h2>");
        var totalMarks = 980;
        var marksObtained = 804;
        var percentage = (marksObtained / totalMarks) * 100;

        document.write("Total marks: " + totalMarks + "<br>");
        document.write("Marks obtained: " + marksObtained + "<br>");
        document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");

        // Task 9: Currency Conversion
        document.write("<h2>Currency in PKR</h2>");
        var usdToPkr = 104.80;
        var sarToPkr = 28;
        var totalCurrency = (10 * usdToPkr) + (25 * sarToPkr);

        document.write("Total Currency in PKR: " + totalCurrency + "<br><br>");

        // Task 10: Arithmetic Operations
        document.write("<h2>Arithmetic Operations</h2>");
        var number = 10;
        var result = ((number + 5) * 10) / 2;

        document.write("Initial number: " + number + "<br>");
        document.write("Result after arithmetic operations: " + result + "<br><br>");

        // Task 11: Age Calculator
        document.write("<h2>Age Calculator</h2>");
        var currentYear = 2016;
        var birthYear = 1992;
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;

        document.write("Current Year: " + currentYear + "<br>");
        document.write("Birth Year: " + birthYear + "<br>");
        document.write("Your Age is: " + age1 + " or " + age2);
        
        // Task 12: The Geometrizer (Circle Calculations)
        document.write("<h2>The Geometrizer</h2>");
        var radius = 20;
        var pi = 3.142;
        var circumference = 2 * pi * radius;
        var area = pi * radius * radius;

        document.write("Radius of a circle: " + radius + "<br>");
        document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
        document.write("The area is: " + area.toFixed(2) + "<br><br>");

        // Task 13: The Lifetime Supply Calculator
        document.write("<h2>The Lifetime Supply Calculator</h2>");
        var favoriteSnack = "chocolate chip";
        var currentAge = 15;
        var maxAge = 65;
        var perDay = 3;
        var totalSnacks = (maxAge - currentAge) * 365 * perDay;

        document.write("Favourite Snack: " + favoriteSnack + "<br>");
        document.write("Current age: " + currentAge + "<br>");
        document.write("Estimated Maximum Age: " + maxAge + "<br>");
        document.write("Amount of snacks per day: " + perDay + "<br>");
        document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");