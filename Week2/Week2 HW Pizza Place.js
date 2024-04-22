//Pizza Place Homework

// Variables for the pizza place and number of toppings
const pizzaPlace = "The House of Pizza";
const numberOfToppings = 8;

// Print the variables and their types
console.log(`${pizzaPlace} string`);
console.log(`${numberOfToppings} number`);

// Template literal that describes the pizza place
console.log(`At ${pizzaPlace}, we have ${numberOfToppings} toppings.`);

// If statement to print a message based on the number of toppings
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

// Print even numbers up to the number of toppings
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    // Checks if the number is even
    console.log(i); // Even number output
  }
}
