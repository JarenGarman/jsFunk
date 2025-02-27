const { coloradoPlants } = require('../datasets/plants')

// To run the code you've written in this file, use node prototypes/problem-sets/plants.js

console.log('Running plants.js')

/* Plants Prompts*/

/*
Level 1

Code:
  Write a function called "findSpringBloomers" that finds how many plants have a blooming season any time in the spring.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findSpringBloomers())
    should print --> 8


Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to iterate over plants and find the count
  2. Add to the accumulator if the blooming season includes spring
*/

const findSpringBloomers = () => {
  return coloradoPlants.reduce((springBloomers, plant) => {
    if (plant.bloomingSeason.includes('Spring')) {
      springBloomers += 1
    }
    return springBloomers
  }, 0)
}

console.log(findSpringBloomers())

/*
Level 2

Code:
  Write a function called "findAverageHeight" that returns the average height of all the plants.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findAverageHeight())
    should print -->  59.2

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to find the total height of all plants
  2. Divide the total height by the total number of plants to find the average and return it
*/

const findAverageHeight = (habitat) => {
  const habitatPlants = coloradoPlants.filter((plant) => {
    return plant.habitat === habitat
  })
  const totalHeight = habitatPlants.reduce((totalHeight, plant) => {
    totalHeight += plant.height
    return totalHeight
  }, 0)
  return totalHeight / habitatPlants.length
}

// console.log(findAverageHeight())

/*
Level 3

Code:
  Refactor your "findAverageHeight" function so that it takes in a habitat and returns the average height of the plants with that habitat. Don't worry about rounding the decimals.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findAverageHeight("meadows"))
    should print -->  18

e.g.
  console.log(findAverageHeight("forests"))
    should print -->  117.33

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Filter plants to find only the ones that match the habitat param
  2. Replace coloradoPlants calls with habitatPlants
*/

console.log(findAverageHeight("meadows"))
console.log(findAverageHeight("forests"))

/*
Level 4

Code:
  Write a function called "organizeByHabitat" that returns an object the plants organized by habitat.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(organizeByHabitat())
    should print -->
    {
      meadows: [ 'Colorado Blue Columbine', 'Alpine Forget-Me-Not', 'Fireweed' ],
      forests: [ 'Aspen Tree', 'Engelmann Spruce', 'Blue Spruce' ],
      moutains: [ 'Columbian Lily' ],
      mountains: [ 'Rocky Mountain Bristlecone Pine', 'Scarlet Gilia' ],
      grasslands: [ 'Indian Paintbrush' ]
    }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Create a unique array of habitats
  2. Iterate over the array to create a new object with habitats as keys
  3. Filter plants to get only plants belonging to that habitat
  4. Map those plants out to get only their names and set that as the property in the object
*/

const organizeByHabitat = () => {
  const habitats = coloradoPlants.reduce((habitats, plant) => {
    if (!habitats.includes(plant.habitat)) {
      habitats.push(plant.habitat)
    }
    return habitats
  }, [])
  return habitats.reduce((organizedHabitats, habitat) => {
    const habitatPlants = coloradoPlants.filter((plant) => {
      return plant.habitat === habitat
    })
    organizedHabitats[habitat] = habitatPlants.map((plant) => {
      return plant.name
    })
    return organizedHabitats
  }, {})
}

console.log(organizeByHabitat())

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the plants prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all plants tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

module.exports = {
  findSpringBloomers,
  findAverageHeight,
  organizeByHabitat
}
