const { clubs } = require('../datasets/clubs');

// To run the code you've written in this file, use node prototypes/problem-sets/clubs.js

console.log('Running clubs.js')

/* Clubs Prompts*/

/*
Level 1

Code:
  Write a function called "findClubMembers" that takes in the clubs data as an argument.  Your function should create an object whose keys are the names of people, and whose values are arrays that include the names of the clubs that person is a part of.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findClubMembers(clubs))
    should print -->
    {
      Louisa: ['Drama', 'Art'],
      Pam: ['Drama', 'Art', 'Chess'],
      Nathaniel: ['Drama', 'Astronomy'],
      ...etc
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Create an empty array to eventually hold a unique collection of member names
  2. Iterate over each club to find it's members
  3. Iterate over each member to add it to the uniqMembers array if it is not already present
  4. Iterate over uniqMembers to create the resulting object to be returned
  5. Filter out the club objects that do not contain the member
  6. Convert the objects to the club names and assign that as a property for the key of whichever member we are currently iterating over
  7. Return the new object for the next iteration
*/

const findClubMembers = (clubs) => {
  const uniqMembers = []
  clubs.forEach((club) => {
    club.members.forEach((member) => {
      if (!uniqMembers.includes(member)) {
        uniqMembers.push(member)
      }
    })
  })
  return uniqMembers.reduce((memberClubs, member) => {
    const clubObjs = clubs.filter((club) => {
      return club.members.includes(member)
    })
    memberClubs[member] = clubObjs.map((club) => {
      return club.club
    })
    return memberClubs
  }, {})
}
console.log(findClubMembers(clubs))
/*
Level 2

Test:
  *Uncomment the module.exports below.
  *Unskip the 1 Club Prompts test in your prototype-test.js file.
  *Run `npm test` to confirm that your function is passing the test.
  *Refactor as needed until the test is passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/



// module.exports = {
//   findClubMembers
// };
