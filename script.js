// ====================
// Part 1: Variables and Conditionals
// ====================
let isStudent = true;

if (isStudent) {
  console.log("You are a student learning JavaScript!");
} else {
  console.log("You are not a student.");
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

// Example 1: For loop (console output)
for (let i = 1; i <= 5; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop (console output)
let count = 1;
while (count <= 3) {
  console.log("While loop count: " + count);
  count++;
}

// ====================
// Part 4: DOM Interactions
// ====================

// 1. Greeting Button - takes user input
document.getElementById("greet-btn").addEventListener("click", function() {
  let name = document.getElementById("name-input").value;
  let output = document.getElementById("greeting-output");

  if (name.trim() === "") {
    output.textContent = "⚠️ Please enter your name.";
    output.style.color = "red";
  } else {
    let greeting = generateGreeting(name);
    output.textContent = greeting;
    output.style.color = "#0077cc";
  }
});

// 2. Sum Button - takes two numbers and calculates sum
document.getElementById("sum-btn").addEventListener("click", function() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sumOutput = document.getElementById("sum-output");

  if (isNaN(num1) || isNaN(num2)) {
    sumOutput.textContent = "⚠️ Please enter valid numbers.";
    sumOutput.style.color = "red";
  } else {
    let sumResult = addNumbers(num1, num2);
    sumOutput.textContent = num1 + " + " + num2 + " = " + sumResult;
    sumOutput.style.color = "#228b22";
  }
});

// 3. African Countries Info (loop through objects and display)
let africanCountries = [
  {
    name: "Nigeria",
    capital: "Abuja",
    population: "223 million",
    economy: "Oil, agriculture, services"
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    population: "55 million",
    economy: "Tourism, agriculture, technology"
  },
  {
    name: "South Africa",
    capital: "Pretoria (administrative)",
    population: "60 million",
    economy: "Mining, manufacturing, finance"
  },
  {
    name: "Egypt",
    capital: "Cairo",
    population: "112 million",
    economy: "Tourism, natural gas, textiles"
  },
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    population: "126 million",
    economy: "Coffee, agriculture, textiles"
  }
];

let loopList = document.getElementById("loop-list");
africanCountries.forEach(country => {
  let li = document.createElement("li");
  li.innerHTML = `
    <strong>${country.name}</strong>  
    <br>Capital: ${country.capital}  
    <br>Population: ${country.population}  
    <br>Key Economy: ${country.economy}
  `;
  loopList.appendChild(li);
});
