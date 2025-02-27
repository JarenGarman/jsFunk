const { constellations, stars } = require('../datasets/astronomy')

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/astronomy.js

console.log('Running astronomy.js')

/* Astronomy Prompts - Spicy! (Advanced) */

/*
Level 1

Code:
  Write a function called "getStarsByColor" that returns an object with keys of the different colors of the stars, whose values are arrays containing the star objects that match.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStarsByColor())
    should print -->
      {
        blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
        white: [{obj}, {obj}],
        yellow: [{obj}, {obj}],
        orange: [{obj}],
        red: [{obj}]
      }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Reduce over stars to create an array of unique star colors
  2. Reduce over the colors array to create our return object
  3. Set the key of color equal to the stars of matching color
*/

const getStarsByColor = () => {
  const colors = stars.reduce((colors, star) => {
    if (!colors.includes(star.color)) {
      colors.push(star.color)
    }
    return colors
  }, [])
  return colors.reduce((starsByColor, color) => {
    starsByColor[color] = stars.filter((star) => {
      return star.color === color
    })
    return starsByColor
  }, {})
}

console.log(getStarsByColor())

/*
Level 2

Test:
  * Uncomment the module.exports below.
  * Unskip the astronomy prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all astronomy tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

module.exports = {
  getStarsByColor
}
