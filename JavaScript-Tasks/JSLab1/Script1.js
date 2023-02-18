var firstName, lastName, fullName;
firstName=prompt("Enter your first name");
lastName = prompt("Enter your last name");
fullName = firstName + " " + lastName;
let isLastName = confirm('Is ' + fullName + ' your full name ?');
console.log(isLastName);
let birthYear = Number(prompt("Enter your Birth year"));
let age = 2022 - `${birthYear}`;
alert("Welcome " + fullName + " you are " + age+" old");




