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
// This function takes an array of toppings and returns a string where the toppings are separated by commas, with "and" before the last topping. If there are no toppings provided, it defaults to "cheese".

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


// BASIC SOLUTION!!!!!!!
// create an array of pizza toppings
// const pizzaToppings = ["pepperoni", "sausage", "onions", "peppers"];

// create a greetCustomer function
// function greetCustomer() {

  // create  a variable to hold the greeting
  // let greeting = `Welcome to The Pizza House, our toppings are: `;

  // use a for loop to iterate through the toppings
  // for (let topping of pizzaToppings) {

    // add each topping to our greeting message
  //   greeting += `${topping}, `;
  // }

  // console log the greeting
//   console.log(greeting);
// }

// call the greetCustomer function
// greetCustomer();



// create a getPizzaOrder function
// function getPizzaOrder(size, crust, ...toppings) {

// create a variable to hold the order using template literal format
  // let order = `One ${size} ${crust} crust pizza with `;

  // add each topping to order variable
  // for (let topping of toppings) {
  //   order += `${topping}, `;
  // }

  // console log the order
  // console.log(`${order}. Coming up!`);

  // return order variables in an array to be used later
  // return [size, crust, toppings];

}
// call getPizzaOrder with parameters...

// create a customerOrder variable using getPizzaOrder function that passes in arguments...
// let customerOrder = getPizzaOrder(
//   "large",
//   "thin",
//   "sausage",
//   "onions",
//   "peppers"
);

// create a preparePizza function
// function preparePizza([orderSize, orderCrust, orderToppings]) {
//   console.log("...your pizza is cooking...");

  // return a pizza object containing size, crust, and toppings which will be passed as an argument to the servePizza function
//   return {
//     size: orderSize,
//     crust: orderCrust,
//     toppings: orderToppings
//   };
// }
// let cookedPizza = preparePizza(customerOrder);


// create a servePizza function
// function servePizza(pizza) {

  // create a variable to hold the order ready message using template literal format
  // let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;

  // use a for of loop to iterate through the pizza toppings
  // for (let topping of pizza.toppings) {

    // add each topping to the order ready message
  //   orderReady += `${topping}, `;
  // }

  // console log the order ready message
//   console.log(`${orderReady}. Enjoy!`);
//   return pizza;
// }
// servePizza(cookedPizza);


// greetCustomer();
// const myPizza = servePizza(
//   preparePizza(getPizzaOrder("small", "thin", "mushrooms", "banana peppers"))
// );
// console.log(myPizza);

// BONUS SOLUTIONS
// #9
// function addListElementsToString(string, list) {
//   for (let i = 0; i < list.length; i++) {
    // if only one topping ordered
    // if (list.length === 1) {
    //   string += `${list[i]}. `;
    // } else if (i === list.length - 1) {
      // if more than one topping ordered and current topping is last in list
    //   string += `and ${list[i]}. `;
    // } else {
      // if more than one topping ordered and current topping is NOT last in array
//       string += `${list[i]}, `;
//     }
//   }
//   return string;
// }

// console.log(
//   addListElementsToString("Here is my formatted Array: ", ["onions", "peppers"])
// );

// #10
// function checkForToppings(toppings) {
//   if (!toppings[0]) {
//     return false;
//   }
//   return true;
// }

// function getPizzaOrderAndCheckForPlain(size, crust, ...toppings) {
//   if (checkForToppings(toppings)) {
//     let order = `One ${size} ${crust} crust pizza with `;
//     order = addListElementsToString(order, toppings);
//     console.log(`${order}Right away!`);
//     return [size, crust, toppings];
//   }
//   console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
//   return [size, crust, toppings];
// }
// WITH TOPPINGS
// getPizzaOrderAndCheckForPlain("small", "thin", "garlic");

// WITHOUT TOPPINGS
// getPizzaOrderAndCheckForPlain("medium", "thick");

// #11
// ordered toppings: pepperoni, batteries
// available toppings: peppers, pepperoni
// function checkOrderedToppings(orderedToppings, availableToppings) {
//   for (let ordered of orderedToppings) {
//     let toppingAvailable = false;
//     for (let available of availableToppings) {
//       if (ordered === available) {
//         toppingAvailable = true;
//       }
//     }
//     if (toppingAvailable) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// function getPizzaOrderAndCheckForToppingAvailability(size, crust, ...toppings) {
//   if (checkForToppings(toppings)) {
//     if (checkOrderedToppings(toppings, pizzaToppings)) {
//       let order = `One ${size} ${crust} crust pizza with `;
//       order = addListElementsToString(order, toppings);
//       console.log(`${order}Right away!`);
//       return [size, crust, toppings];
//     }
//     let wrongToppingMessage =
//       "I'm sorry, one or more of the toppings you ordered is unavailable. Our toppings are: ";
//     wrongToppingMessage = addListElementsToString(
//       wrongToppingMessage,
//       pizzaToppings
//     );
//     console.log(`${wrongToppingMessage}Please order again.`);
//     return false;
//   }
//   console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
//   return [size, crust, toppings];
// }

// AVAILABLE TOPPINGS
// getPizzaOrderAndCheckForToppingAvailability(
//   "large",
//   "thin",
//   "onions",
//   "peppers"
// );

 // UNAVAILABLE TOPPINGS
// getPizzaOrderAndCheckForToppingAvailability(
//   "medium",
//   "thick",
//   "rock salt",
//   "avocado toast"
// );

// function addListElementsToString_AllCases(string, list) {
//   for (let i = 0; i < list.length; i++) {
    // if only one topping ordered
    // if (list.length === 1) {
    //   string += `${list[i]}. `;
    // } else if (list.length === 2 && !i) {
      // ! this else if statement is the new part
      // if 2 toppings ordered and current topping is first (index 0)
    //   string += `${list[i]} `;
    // } else if (i === list.length - 1) {
      // if more than one topping ordered and current topping is last in list
    //   string += `and ${list[i]}. `;
    // } else {
      // if more than two toppings ordered and current topping is NOT last in array
//       string += `${list[i]}, `;
//     }
//   }
//   return string;
// }
// console.log(addListElementsToString_AllCases("hello: ", ["one"]));
// console.log(addListElementsToString_AllCases("hello: ", ["one", "two"]));
// console.log(addListElementsToString_AllCases("hello: ", ["one", "one", "two"]));
