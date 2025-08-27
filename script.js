// ====================
// Part 1: Variables and Conditionals
// ====================
let userName = "George"; 
let isStudent = true;

if (isStudent) {
  console.log(userName + " is a student learning JavaScript!");
} else {
  console.log(userName + " is not a student.");
}

// ====================
// Part 2: Custom Functions
// ====================

// Function 1: Generate a greeting
function generateGreeting(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// ====================
// Part 3: Loop Examples
// ====================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count: " + count);
  count++;
}

// ====================
// Part 4: DOM Interactions
// ====================

// 1. Change text content when button is clicked
document.getElementById("greet-btn").addEventListener("click", function() {
  let greeting = generateGreeting(userName);
  document.getElementById("greeting-output").textContent = greeting;
});

// 2. Modify style dynamically
document.getElementById("greet-btn").addEventListener("mouseover", function() {
  this.style.backgroundColor = "#0077cc";
  this.style.color = "white";
});
document.getElementById("greet-btn").addEventListener("mouseout", function() {
  this.style.backgroundColor = "";
  this.style.color = "";
});

// 3. Add loop results into the DOM
let loopList = document.getElementById("loop-list");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i + " (added with JS loop)";
  loopList.appendChild(li);
}

// 4. Display result of addNumbers function on the webpage
let sumResult = addNumbers(5, 10);
document.getElementById("sum-output").textContent = "5 + 10 = " + sumResult;
