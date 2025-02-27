const sentence = 'Potatoes are so unbelievably delicious!'

// To run the code you've written in this file, use node prototypes/problem-sets/sentence.js

console.log('Running sentence.js')

/* Sentence Prompts*/

/*
Level 1

Code:
  Write a function called "countLetters" that takes in a letter and counts how many times that letter appears in the sentence. Capitalization should not matter.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(countLetters('t'))
    // should print ==> 2

  console.log(countLetters('z'))
    // should print ==> 0

  console.log(countLetters('E'))
    // should print ==> 5

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Split the sentence into an array of individual characters
  2. Use reduce to find the sum of all of the characters that match the letter param
  3. Call .toLowerCase() on the char and letter param to account for differences in case
*/

const countLetters = (letter) => {
  const chars = sentence.split('')
  return chars.reduce((numLetter, char) => {
    if (char.toLowerCase() === letter.toLowerCase()) {
      numLetter++
    }
    return numLetter
  }, 0)
}

console.log(countLetters('t'))
console.log(countLetters('z'))
console.log(countLetters('E'))

/*
Level 2

Code:
  Write a function called "findLetterCounts" that returns an object which lists all the letters (lowercase) and how many times that letter appears.

  Note: Keep the spaces and ! in your object.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findLetterCounts())
    should print -->
    {
        p: 1,
        o: 4,
        t: 2,
        a: 3,
        e: 5,
        s: 3,
        ' ': 4,
        r: 1,
        u: 2,
        n: 1,
        b: 2,
        l: 3,
        i: 3,
        v: 1,
        y: 1,
        d: 1,
        c: 1,
        '!': 1
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use split to create an array of individual chars
  2. Use reduce to create a new object that will hold our letter counts
  3. If the key of the current letter exists, add one to it
  4. Else, create the key with an initial value of 1
*/

const findLetterCounts = () => {
  const chars = sentence.toLowerCase().split('')
  return chars.reduce((letterCounts, char) => {
    if (letterCounts[char]) {
      letterCounts[char]++
    } else {
      letterCounts[char] = 1
    }
    return letterCounts
  }, {})
}

console.log(findLetterCounts())

/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the sentence prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all sentence tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.

  1. I needed to call .toLowerCase() on the sentence before separating it to account for case
*/

module.exports = {
  countLetters,
  findLetterCounts
}
