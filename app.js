//todo =========  Chapter 26 to 30  =======

//?  Q1

// var userInput = prompt("Enter a positive Integer");
// document.write( "Number "  + userInput + '<br>');

// var b = Math.round(userInput)
// document.write( 'Roundoff ' + b + '<br>')

// var a = Math.floor(userInput)
// document.write(  'Floor '  + a + '<br>');


// var c = Math.ceil(userInput)
// document.write( 'Ceil '  + c + '<br>');


//?  Q2


// var userInput = prompt("Enter a Negative Floating points");

// if(isNaN(userInput)  ||  userInput >= 0){
//     alert("Invalid input. Please enter a negative floating-point number.")
// }
// else{
// document.write( "Number "  + userInput + '<br>');

// var b = Math.round(userInput)
// document.write( 'Roundoff ' + b + '<br>')

// var a = Math.floor(userInput)
// document.write(  'Floor '  + a + '<br>');


// var c = Math.ceil(userInput)
// document.write( 'Ceil '  + c + '<br>');

// }


//? Q3

// var userInput = +prompt("Enter a number to get absolute value")

// var absoluteValue = userInput;
// document.write( "The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));

//? Q4


// var diceValue = Math.floor(Math.random() * 8) + 1;
// document.write("random dice value "+ diceValue);

//? Q5 

// var coin = Math.floor(Math.random() * 2) + 1;
// var coin2 = coin < 2 ? "Heads" : "Tails";

// document.write("random coin value "+ coin2);


//? Q6

// var randomValue = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomValue);

//? Q7

// var userInput = prompt("Please enter your weight in kilogram (kg)");

// console.log( "The weight of user input is " + userInput +"kgs")


// var b = userInput.toLocaleLowerCase();
// for(i= 0; i<b.length; i++){
//     if(b[i] === "kgs"  || b[i] === 'kilograms' || b[i] === parseFloat){
//         console.log(b);
//     }
//     else{
//        console.log("Else invalid input")
//     }
// }


//?  Q8

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userInput = prompt("Guess the secret number (between 1 and 10):");

// var userGuess = parseInt(userInput);

// if (userGuess === secretNumber) {
//   alert("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//   alert("Sorry, the secret number was " + secretNumber + ". Try again!");
// }


//Todo ===========   Chapter 31 to 34  ============

//?  Q1

// var date = new Date();
// document.write(date);



// var month = new Date().getMonth();
// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// document.write( "Current Month " + monthNames[month]);

//? Q3


// var day = new Date().getDay()
// var array = [
//   "Sun",
//   "Mon",
//   "Tue",
//   "Wed",
//   "Thu",
//   "Fri",
//   "Sat",
// ];
// document.write(array[day]);

//? Q4

// const currentDate = new Date();

// const currentDay = currentDate.getDay();

// if (currentDay === 6 || currentDay === 0) {
//   console.log("It's Fun day");
// } else {
//   console.log("It's not Fun day");
// }

//? Q5

// const currentDate2 = new Date();

// const currentDayOfMonth = currentDate2.getDate();

// if (currentDayOfMonth < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }

//?  Q6

// const now = new Date();
// const minutesSince1970 = Math.floor((now - new Date(now.getFullYear(), 0, 1)) / (1000 * 60));
// // const minutesSince1970 = Math.floor((now - new Date(now.getFullYear(), 0, 1)) / (1000));

// console.log(`Minutes since midnight, Jan. 1, 1970: ${minutesSince1970}`);

//? Q7

// const currentDate = new Date();

// const currentHour = currentDate.getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

//?  Q8

// const laterDate = new Date(2020, 11, 31);

// console.log(laterDate);

//? Q9

// const ramadanStartDate = new Date(2015, 5, 18); 


// const currentDate = new Date();


// const timeDifferenceMs = currentDate - ramadanStartDate;
// console.log(timeDifferenceMs);

// const daysPassed = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));


// alert(`Number of days passed since 2015 1st Ramadan: ${daysPassed}`);

//?  Q10

// const referenceDate = new Date('2023-10-04'); 


// const beginningOf2015 = new Date('2015-01-01');

// const timeDifferenceMs = referenceDate - beginningOf2015;

// const secondsElapsed = Math.floor(timeDifferenceMs / 1000);

// document.write(`Seconds elapsed between the reference date and the beginning of 2015: ${secondsElapsed} seconds`);


//? Q11

// const currentDate = new Date();

// const currentHours = currentDate.getHours();

// document.write(currentDate + '<br>');

// currentDate.setHours(currentHours + 1);

// document.write(`Updated Date: ${currentDate}`);

//?  Q12

// const currentDate = new Date();

// const yearsAgo = 100;
// const date100YearsAgo = new Date(currentDate.getFullYear() - yearsAgo, currentDate.getMonth(), currentDate.getDate());

// alert(`Date 100 years ago: ${date100YearsAgo.toDateString()}`);

//?  Q13

// const userAge = parseInt(prompt("Please enter your age:"));

// const currentYear = new Date().getFullYear();

// const birthYear = currentYear - userAge;


// document.write(`Your birth year is: ${birthYear}`);

//? Q14

// const customerName = prompt("Enter your name:");
// const numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
// const chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
// const dueDate = prompt("Enter the due date (YYYY-MM-DD):");

// const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// const latePaymentSurchargeRate = 0.10; 
// const latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate).toFixed(2);

// const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<h3>Customer Information:</h3>");
// document.write(`<p>Customer Name: ${customerName}</p>`);
// document.write(`<p>Current Month: ${new Date().toLocaleString('default', { month: 'long' })}</p>`);
// document.write("<h3>Electricity Charges:</h3>");
// document.write(`<p>Number of Units: ${numberOfUnits}</p>`);
// document.write(`<p>Charges per Unit: $${chargesPerUnit.toFixed(2)}</p>`);
// document.write("<h3>Bill Amounts:</h3>");
// document.write(`<p>Net Amount Payable (within Due Date): $${netAmountPayable}</p>`);
// document.write(`<p>Late Payment Surcharge: $${latePaymentSurcharge}</p>`);
// document.write(`<p>Gross Amount Payable (after Due Date): $${grossAmountPayable}</p>`);


// const currentDate = new Date();
// const dueDateObject = new Date(dueDate);
// if (currentDate > dueDateObject) {
//   document.write("<p style='color: red;'>This bill is overdue.</p>");
// }