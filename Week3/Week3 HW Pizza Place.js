//Create an Array of Pizza Toppings
const pizzaToppings = ["pepperoni", "sausage", "mushrooms", "onions"];

//Create a greetCustomer Function
function greetCustomer() {
  let greeting = "Welcome to Pizza House, our toppings are: ";
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (i === pizzaToppings.length - 1) {
      greeting += pizzaToppings[i] + ".";
    } else {
      greeting += pizzaToppings[i] + ", ";
    }
  }
  console.log(greeting);
}

//Create a getPizzaOrder Function
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let i = 0; i < toppings.length; i++) {
    if (i === toppings.length - 1) {
      order += toppings[i] + ". ";
    } else {
      order += toppings[i] + ", ";
    }
  }
  order += "coming up!";
  console.log(order);
  return [size, crust, toppings];
}

//Create a preparePizza Function
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

//Create a servePizza Function
function servePizza(pizza) {
  let order = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let i = 0; i < pizza.toppings.length; i++) {
    if (i === pizza.toppings.length - 1) {
      order += pizza.toppings[i] + ". ";
    } else {
      order += pizza.toppings[i] + ", ";
    }
  }
  order += "Enjoy!";
  console.log(order);
  return pizza;
}

//Example Usage of the Function
greetCustomer();
const orderDetails = getPizzaOrder(
  "large",
  "thin",
  "sausage",
  "onions",
  "peppers"
);
const preparedPizza = preparePizza(orderDetails);
const servedPizza = servePizza(preparedPizza);

//Bonus Challenge
//Create a function to list toppings grammatically
function listToppings(toppings) {
    if (toppings.length === 0) {
        return 'cheese';
    }
    if (toppings.length === 1) {
        return toppings[0];
    }
    const last = toppings.pop();
    return toppings.join(', ') + ', and ' + last;
}
This function takes an array of toppings and returns a string where the toppings are separated by commas, with "and" before the last topping. If there are no toppings provided, it defaults to "cheese".

//Modify greetCustomer to use listToppings
function greetCustomer() {
    console.log(`Welcome to Pizza House, our toppings are: ${listToppings(pizzaToppings)}.`);
}

//Refactor getPizzaOrder to handle no toppings and validate toppings
function getPizzaOrder(size, crust, ...orderedToppings) {
    if (orderedToppings.length === 0) {
        console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
        return [size, crust, orderedToppings];
    }
    const invalidToppings = orderedToppings.filter(topping => !pizzaToppings.includes(topping));
    if (invalidToppings.length > 0) {
        console.log(`We don't offer ${listToppings(invalidToppings)}. Please order again.`);
        return;
    }
    console.log(`One ${size} ${crust} crust pizza with ${listToppings(orderedToppings)} coming up!`);
    return [size, crust, orderedToppings];
}
//This version of getPizzaOrder checks if no toppings were ordered and adjusts the message accordingly. It also filters out any ordered toppings that are not available and informs the customer if there are any issues.

//Update servePizza to improve grammar for cheese pizzas
function servePizza(pizza) {
    if (pizza.toppings.length === 0) {
        console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust cheese pizza. Enjoy!`);
        return pizza;
    }
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${listToppings(pizza.toppings)}. Enjoy!`);
    return pizza;
}
//This modification ensures that the order message is grammatically correct even when no toppings are ordered, defaulting to "cheese pizza".

//Example Usage
greetCustomer(); // Lists available toppings
const orderDetails = getPizzaOrder('large', 'thin', 'mushrooms', 'onions'); // Handles topping order
if (orderDetails) {
    const preparedPizza = preparePizza(orderDetails);
    servePizza(preparedPizza); // Serves the pizza
}
//This structured approach enhances the user interface of your pizza ordering functions by ensuring grammatically correct messages, handling cases with no toppings elegantly, and checking for invalid topping requests.
