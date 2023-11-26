//--------------------------------------------------
// JS4B - Homework - Challenge Part 1
//--------------------------------------------------

// 1/2: Create two variables for your favorite number and some other random number
const myFavoriteNumber = 7;
const someOtherNumber = 3;

// 3: Calculate the two numbers multiplied
const multipliedNumbers = myFavoriteNumber * someOtherNumber;

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(multipliedNumbers);

// 4/5: Store your first name in a variable and your last name in another
const firstName = 'Onelio';
const lastName = 'Viera';
console.log(firstName, lastName);

// 6: Store your full name in a variable by adding the two variables
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Bonus: Store your firsName, lastName in a variable called myInfo using template literals
const myInfo = (`My first name is ${firstName}, and my last name is ${lastName}`);
console.log(myInfo);

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(fullName);

// 7: Store your firstName, lastName, favColor and hometown in an object called myDetails
const myDetails = {
  firstName: firstName,
  lastName: lastName,
  favColor: 'purple',
  hometown: 'Tampa, FL'
}

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(myDetails);

// 8: Using the data from your myDetails variable, create a one sentence bio and store it as a string.
const myBio = `Hello, my name is ${myDetails.firstName} ${myDetails.lastName}. My current favorite color is ${myDetails.favColor}, and I am from ${myDetails.hometown}.`;

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(myBio);

// 9: Create an array called dreamDestinations with your top 5 travel destinations.
const dreamDestinations = ['Cuba', 'Span', 'Italy', 'Portugal', 'Greece'];

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(dreamDestinations);

//--------------------------------------------------
// JS4B - Homework - Challenge Part 2
//--------------------------------------------------

// 10: Write a loop that logs 'hello' to the console 10 times
for (let i = 0; i < 10; i++) {
  // code here
  console.log('hello');
}

// 11: Use a WHILE loop to add 1 to 'count' 100 times
let count = 0;
// code here
while (count < 100) {
  count += 1;
}
// Console log the new value of count
console.log(count);

// 12: Print the even numbers between 1 and 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 13: Print your top five travel destinations to the console using a for loop.

// BONUS
// 14: Use your for loop to print the text from "mySpecialArray"
//ex. if you used this loop on the array ['p','o','r','m','s','a','g','r'] you would see the text logged to the console that spelled "programs"

const mySpecialArray = [
  "I",
  "L",
  "v",
  " ",
  "o",
  "e",
  "m",
  "t",
  "h",
  "i",
  "s",
  "d",
  "C",
  "e",
  "o",
  " ",
];

// loop goes here

// 15: Create your loop here that will only log the 1st and every 3rd element of an array.
//ex. if you used this loop on the array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] you would see the text logged to the console "0369"

// loop goes here
