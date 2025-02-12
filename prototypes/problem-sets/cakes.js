const { cakes } = require('../datasets/cakes')

// To run the code you've written in this file, use node prototypes/problem-sets/cakes.js

console.log('Running cakes.js')

/* Cakes Prompts*/

/*
Level 1

Code:
  Write a function called "getStockCounts" that returns an array of objects that include just the flavor of the cake and how much of that cake is in stock.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStockCounts())
    should print -->
      [
       { flavor: 'dark chocolate', inStock: 15 },
       { flavor: 'yellow', inStock: 14 },
        ..etc
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Map over each cake to convert it into an object with just the cakeFlavor and inStock properties
*/

const getStockCounts = () => {
  return cakes.map((cake) => {
    return {
      cakeFlavor: cake.cakeFlavor,
      inStock: cake.inStock
    }
  })
}

console.log(getStockCounts())

/*
Level 2

Code:
  Write a function called "getInStock" that returns an array of only the cakes that are in stock.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getInStock())
    should print -->
    [
      {
      cakeFlavor: 'dark chocolate',
      filling: null,
      frosting: 'dark chocolate ganache',
      toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
      inStock: 15
      },
      {
        cakeFlavor: 'yellow',
        filling: 'citrus glaze',
        frosting: 'chantilly cream',
        toppings: ['berries', 'edible flowers'],
        inStock: 14
      },
      ..etc
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Filter out the cakes to remove any where the inStock is 0 or less
*/

const getInStock = () => {
  return cakes.filter((cake) => {
    return cake.inStock > 0
  })
}

console.log(getInStock())

/*
Level 3

Code:
  Write a function called "doInventory" that returns the total amount of cakes in stock.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(doInventory())
    should print -->  59

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to sum the total inStock of all cakes
*/

const doInventory = () => {
  return cakes.reduce((totalCakes, cake) => {
    totalCakes += cake.inStock
    return totalCakes
  }, 0)
}

console.log(doInventory())

/*
Level 4

Code:
  Write a function called "getToppings" that returns an array of all unique toppings (no duplicates) needed to bake every cake in the dataset.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getToppings())
    should print -->
        ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.
*/


/*
Level 5

Code:
  I need to make a grocery list.  Write a function called "makeGroceryList" that will give me an object where the keys are each topping, and the values are the amount of that topping I need to buy.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(makeGroceryList())
    should print -->
      {
        'dutch process cocoa': 1,
        'toasted sugar': 3,
        'smoked sea salt': 3,
        'berries': 2,
        ...etc
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.
*/



/*
Level 6

Test:
  * Uncomment the module.exports below.
  * Unskip the 5 Cakes Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 5 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

// module.exports = {
//   getStockCounts,
//   getInStock,
//   doInventory,
//   getToppings,
//   makeGroceryList
// }
