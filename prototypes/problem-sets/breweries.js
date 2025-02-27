const { breweries } = require('../datasets/breweries')

// To run the code you've written in this file, use node prototypes/problem-sets/breweries.js

console.log('Running breweries.js')

/* Breweries Prompts*/

/*
Level 1

Code:
  Write a function called "getBeerCount" that returns the total beer count of all beers for every brewery combined.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getBeerCount())
    should print --> 40

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to find the sum of all beers
  2. Use brewery.beers.length to find the number of beers at a brewery
*/

const getBeerCount = () => {
  return breweries.reduce((totalCount, brewery) => {
    totalCount += brewery.beers.length
    return totalCount
  }, 0)
}

console.log(getBeerCount())

/*
Level 2

Code:
  Write a function called "getBreweryBeerCount" that returns an array of objects where each object has the name of a brewery and the count of how many beers that brewery has.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getBreweryBeerCount())
    should print -->
      [
        { name: 'Little Machine Brew', beerCount: 12 },
        { name: 'Ratio Beerworks', beerCount: 5},
        ...etc.
      ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Map over the breweries to transform them into a new object
  2. Use brewery name and beers.length for the properties
*/

const getBreweryBeerCount = () => {
  return breweries.map((brewery) => {
    return {
      name: brewery.name,
      beerCount: brewery.beers.length
    }
  })
}

console.log(getBreweryBeerCount())

/*
Level 3

Code:
  Write a function called "getSingleBreweryBeerCount" that takes in a brewery name as an argument and returns the number of beers that specified brewery has.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getSingleBreweryBeerCount('Ratio Beerworks'))
    should print -->  5

e.g.
  console.log(getSingleBreweryBeerCount("Platt Park Brewing Co."))
    should print -->  7

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use find to get the brewery object with a matching name to the param
  2. Return the beers.length
*/

const getSingleBreweryBeerCount = (breweryName) => {
  const brewery = breweries.find((brewery) => {
    return brewery.name === breweryName
  })
  return brewery.beers.length
}

console.log(getSingleBreweryBeerCount('Ratio Beerworks'))
console.log(getSingleBreweryBeerCount("Platt Park Brewing Co."))

/*
Level 4

Code:
  Write a function called "findHighestAbvBeer" that takes in a brewery name and returns the beer which has the highest ABV of all beers at that brewery.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findHighestAbvBeer("Ratio Beerworks"))
    should print -->
      { name: 'Hold Steady', type: 'Chocolate Rye Scotch Ale', abv: 7.5, ibu: 27, }

e.g.
  console.log(findHighestAbvBeer("Little Machine Brew"))
    should print -->
      { name: 'B.B. Rodriguez', type: 'Coffee Double Brown', abv: 8, ibu: 30, }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Find the brewery by param name
  2. Map out the beers to a new array of just abvs
  3. Find the max abv
  4. Find the index of the max abv
  5. Return the beers array item of the same index
*/

const findHighestAbvBeer = (breweryName) => {
  const brewery = breweries.find((brewery) => {
    return brewery.name === breweryName
  })
  const abvs = brewery.beers.map((beer) => {
    return beer.abv
  })
  return brewery.beers.at(abvs.indexOf(Math.max(...abvs)))
}

console.log(findHighestAbvBeer("Ratio Beerworks"))
console.log(findHighestAbvBeer("Little Machine Brew"))

/*
Level 5

Code:
  Write a function called "findHighestAbvAll" returns the beer which has the highest ABV across all breweries.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findHighestAbvAll())
      { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Map out the breweries into an array of only the highest abv beer, using the previous function
  2. Map out this array into just the abvs
  3. Find the max abv
  4. Find the index of the max abv
  5. Return the highestPer array item of the same index
*/

const findHighestAbvAll = () => {
  const highestPer = breweries.map((brewery) => {
    return findHighestAbvBeer(brewery.name)
  })
  const highestAbvs = highestPer.map((beer) => {
    return beer.abv
  })
  return highestPer.at(highestAbvs.indexOf(Math.max(...highestAbvs)))
}

console.log(findHighestAbvAll())

/*
Level 6

Test:
  * Uncomment the module.exports below.
  * Unskip the Brewery Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Brewery tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

module.exports = {
  getBeerCount,
  getBreweryBeerCount,
  getSingleBreweryBeerCount,
  findHighestAbvBeer,
  findHighestAbvAll
}
