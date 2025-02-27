const { characters, weapons } = require('../datasets/ultima')

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/ultima.js

console.log('Running ultima.js')

/* Ultima Prompts - Spicy! (Advanced) */

/*
Level 1

Code:
  Write a function called "getTotalDamage" that returns the sum of the amount of damage for all the weapons that our characters can use.  Even though the same weapon might be used by multiple characters, count each weapon only once.

  HINT: Solve this *without* using Object.keys().  Iterate over the characters array, then iterate through each character's weapons array. Find a way to make sure you only count each weapon once.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getTotalDamage())
    should print -->  59

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Reduce over characters to create an array of unique weapons
  2. Iterate over each weapon to add it to the array if it is not already present
  3. Reduce over each eligible weapon to find the sum of all of the weapon damages
*/

const getTotalDamage = () => {
  const eligibleWeapons = characters.reduce((weapons, character) => {
    character.weapons.forEach((weapon) => {
      if (!weapons.includes(weapon)) {
        weapons.push(weapon)
      }
    })
    return weapons
  }, [])
  return eligibleWeapons.reduce((damage, weapon) => {
    damage += weapons[weapon].damage
    return damage
  }, 0)
}

console.log(getTotalDamage())

/*
Level 2

Code:
  Write a function called "charactersByTotal" that returns the sum damage and total range for each character as an object.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(charactersByTotal())
    should print -->
      [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Map over the characters array to create our return array
  2. Reduce over the character's weapons to create the stats object
  3. Find the weapon in the weapons object
  4. Add the range and damage to their respective properties in the stats object
  5. Return
*/

const charactersByTotal = () => {
  return characters.map((character) => {
    const stats = character.weapons.reduce((stats, weapon) => {
      stats.damage += weapons[weapon].damage
      stats.range += weapons[weapon].range
      return stats
    }, { damage: 0, range: 0 })
    const result = {}
    result[character.name] = stats
    return result
  })
}

console.log(charactersByTotal())

/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the ultima prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all ultima tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

module.exports = {
  getTotalDamage,
  charactersByTotal
}
