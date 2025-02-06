const { kitties } = require('../datasets/kitties')
const { puppers } = require('../datasets/puppers')

// To run the code you've written in this file, use node prototypes/problem-sets/kitties.js

console.log('Running kitties.js')

/* Kitty Prompts*/

/*
Level 1

Code: 
  Write a function called "findOrangeNames" that returns an array of just the names of kitties who are orange 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findOrangeNames())
    should print --> ['Tiger', 'Snickers']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// First, we need to find the kitties whose color is orange. For this, we can use filter()
// Next, we need to convert this array to one of just the kitty names. We can use map() to accomplish this

const findOrangeNames = (animals) => {
  let animalsCopy = animals
  const orangeAnimals = animalsCopy.filter((animal) => animal.color === 'orange')
  return orangeAnimals.map((animal) => animal.name)
}

/*
Level 2

Code: 
  Write a function called "sortByAge" that returns an array of kitty objects that are sorted from oldest to youngest.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByAge())
    should print -->   
      [{
        name: 'Snickers',
        age: 8,
        color: 'orange'
      },
      {
        name: 'Tiger',
        age: 5,
        color: 'orange'
      },
      {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, 
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// We can use sort() to sort the array
// In order to sort oldest to youngest, we need to do b - a

const sortByAge = (animals) => {
  let animalsCopy = animals
  return animalsCopy.sort((a, b) => b.age - a.age)
}

/*
Level 3

Code: 
  Write a function called "growUp" that returns an array of kitty objects that have all grown up by 2 years.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(growUp())
    should print -->   
      [{
        name: 'Felicia',
        age: 4,
        color: 'grey'
      },
      {
        name: 'Tiger',
        age: 7,
        color: 'orange'
      },
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// First, we need to create a copy of kitties that we can modify
// Next, we will take each kitty and add two to it's age
// Then, return this modified copy

const growUp = (animals) => {
  let grownAnimals = animals
  grownAnimals.forEach((animal) => animal.age += 2)
  return grownAnimals
}

/*
Level 4

Currently, your functions are probably using the imported `kitties` global  variable from line 1.

Code:
  Refactor the three functions above using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.

Invoke:
  Invoke each refactored function twice, once passing the kitties data as an argument and once passing the puppers data as an argument

e.g.
  console.log(findOrangeNames(kitties)) --> same result as above
  console.log(sortByAge(kitties)) --> same result as above
  console.log(growUp(kitties)) --> same result as above

  console.log(findOrangeNames(puppers)) 
    should return --> ["Hatchet", "Butter"]

  console.log(sortByAge(puppers)) 
    should return --> 
      [{
        name: 'Scout',
        age: 12,
        color: 'grey'
      },
      {
        name: 'Stick',
        age: 6,
        color: 'brown'
      },
      ...etc]

  console.log(growUp(puppers))
    should return --> 
      [{
        name: 'Scout',
        age: 14,
        color: 'grey'
      },
      {
        name: 'Hatchet',
        age: 5,
        color: 'orange'
      },
      ...etc]

Annotation:
  Jot down any takeaways, questions, or reflections about this refactoring.
*/
// First off, we need to add in a parameter to accept an array argument. Animals seems like a good name
// Next, we need to replace any instance of kitty, kitties, or similar to their animal counterparts
// After doing this, I see that my first two solutions are working on the original dataset instead of copies
// I will need to refactor these methods to work on copies so it doesn't change the results of future tests

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the 3 Kitty Prompts tests and 3 Kitty Prompts Refactor tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 6 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

module.exports = {
  findOrangeNames,
  sortByAge,
  growUp
}
