const { nationalParks } = require('../datasets/nationalParks')

// To run the code you've written in this file, use node prototypes/problem-sets/nationalParks.js

console.log('Running nationalParks.js')

/* National Parks Prompts*/

/*
Level 1

Code:
  Write a function called "getParkVisitList" that returns an object containing the names of which parks I need to visit and the ones I have already visited.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getParkVisitList())
    should print -->
    {
      parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
      parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use filter to create two new arrays, split by visited and not visited
  2. Return a new object with properties of the respective arrays mapped to just the park name
*/

const getParkVisitList = () => {
  const visited = nationalParks.filter((park) => {
    return park.visited
  })
  const notVisited = nationalParks.filter((park) => {
    return !park.visited
  })
  return {
    parksToVisit: notVisited.map((park) => {
      return park.name
    }),
    parksVisited: visited.map((park) => {
      return park.name
    })
  }
}

console.log(getParkVisitList())

/*
Level 2

Code:
  Write a function called "getParkInEachState" that returns an array of objects where the key is the state and the value is its National Park.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getParkInEachState())
    should print -->
    [
      { Colorado: 'Rocky Mountain' },
      { Wyoming: 'Yellowstone' },
      { Montana: 'Glacier' },
      { Maine: 'Acadia' },
      { Utah: 'Zion' },
      { Florida: 'Everglades' }
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Map over each park to transform it into an object
  2. Key of the park location with a property of the park name
*/

const getParkInEachState = () => {
  return nationalParks.map((park) => {
    return { [park.location]: park.name }
  })
}

console.log(getParkInEachState())

/*
Level 3

Code:
  Write a function called "getParkActivities" that returns an array of all the activities I can do in a National Park. Make sure to exclude duplicates.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getParkActivities())
    should print -->
    [
      'hiking',
      'shoeshoing',
      'camping',
      'fishing',
      'boating',
      'watching wildlife',
      'cross-country skiing',
      'swimming',
      'bird watching',
      'canyoneering',
      'backpacking',
      'rock climbing'
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Reduce over nationalParks to create a new array
  2. Iterate over each activity
  3. If the activity is not already in the new array, add it
*/

const getParkActivities = () => {
  return nationalParks.reduce((activities, park) => {
    park.activities.forEach((activity) => {
      if (!activities.includes(activity)) {
        activities.push(activity)
      }
    })
    return activities
  }, [])
}

console.log(getParkActivities())

/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the National Park Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all National Park tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/

// module.exports = {
//   getParkVisitList,
//   getParkInEachState,
//   getParkActivities
// }
