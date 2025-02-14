const { dinosaurs, humans, movies } = require('../datasets/dinosaurs')

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/dinosaurs.js

console.log('Running dinosaurs.js')

/* Dinosaurs Prompts - Spicy! (Advanced) */

/*
Level 1

Code:
  Write a function called "countAwesomeDinosaurs" that returns an object where each key is a movie title and each value is the number of *awesome* dinosaurs in that movie.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(countAwesomeDinosaurs())
    should print -->
    {
      'Jurassic Park': 5,
      'The Lost World: Jurassic Park': 8,
      'Jurassic Park III': 9,
      'Jurassic World': 11,
      'Jurassic World: Fallen Kingdom': 18
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Reduce over movies to create our resulting object
  2. Filter the movie dinos to get only the awesome ones
  3. Set the key of the movie title equal to the dinos array length
*/

const countAwesomeDinosaurs = () => {
  return movies.reduce((result, movie) => {
    const aweDinos = movie.dinos.filter((dino) => {
      return dinosaurs[dino].isAwesome
    })
    result[movie.title] = aweDinos.length
    return result
  }, {})
}

console.log(countAwesomeDinosaurs())

/*
Level 2

Code:
  Write a function called "averageAgePerMovie" that returns an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(averageAgePerMovie())
    should print -->
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Reduce over the movies to create a unique array of directors
  2. Reduce over the directors to create our return object
  3. Filter the movies to find only the ones belonging to that director
  4. Iterate through each movie to calculate average age
  5. Reduce over the cast to find the sum of all of their ages (year released - year born)
  6. Divide the total by the number of cast members to find the average
  7. Set that average (rounded down) to be the property with the key of the movie title
  8. Add that object as the property for the key of the director
*/

const averageAgePerMovie = () => {
  const directors = movies.reduce((directors, movie) => {
    if (!directors.includes(movie.director)) {
      directors.push(movie.director)
    }
    return directors
  }, [])
  return directors.reduce((result, director) => {
    const directorMovies = movies.filter((movie) => {
      return movie.director === director
    })
    const averageAgeMovies = {}
    directorMovies.forEach((movie) => {
      const totalAge = movie.cast.reduce((totalAge, castMember) => {
        totalAge += movie.yearReleased - humans[castMember].yearBorn
        return totalAge
      }, 0)
      averageAgeMovies[movie.title] = Math.floor(totalAge / movie.cast.length)
    })
    result[director] = averageAgeMovies
    return result
  }, {})
}

console.log(averageAgePerMovie())

/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the dinosaurs prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all dinosaurs tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

module.exports = {
  countAwesomeDinosaurs,
  averageAgePerMovie
}
