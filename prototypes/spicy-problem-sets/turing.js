const { instructors, cohorts } = require('../datasets/turing')

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/turing.js

console.log('Running turing.js')

/* Turing Prompts - Spicy! (Advanced) */

/*
Level 1

Code:
  Write a function called "studentsForEachInstructor" that returns an array of instructors where each instructor is an object with a name and the count of students in their module.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(studentsForEachInstructor())
    should print -->
      [
        { name: 'Pam', studentCount: 21 },
        { name: 'Brittany', studentCount: 21 },
        ...etc
        { name: 'Christie', studentCount: 20 },
        { name: 'Will', studentCount: 20 }
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to create a new object, key of instructor name and property of instructor module
  2. map over the instructors to create the return array
  3. Assign module to the module from the instructor
  4. Return instructor name and module student count
*/

const studentsForEachInstructor = () => {
  const instructorModule = instructors.reduce((instructorModule, instructor) => {
    instructorModule[instructor.name] = instructor.module
    return instructorModule
  }, {})
  return instructors.map((instructor) => {
    const module = cohorts.find((cohort) => {
      return cohort.module === instructorModule[instructor.name]
    })
    return {
      name: instructor.name,
      studentCount: module.studentCount
    }
  })
}

console.log(studentsForEachInstructor())

/*
Level 2

Code:
  Write a function called "studentsPerInstructor" that returns an object of how many students per teacher there are in each cohort .

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(studentsPerInstructor())
    should print -->
      {
        cohort1806: 15,
        cohort1804: 7,
        cohort1803: 10,
        cohort1801: 9
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to create a new object
  2. Filter the instructors to find only the ones for the particular module
  3. Divide the cohort student count by the length of the filtered array
*/

const studentsPerInstructor = () => {
  return cohorts.reduce((studentsPer, cohort) => {
    studentsPer[`cohort${cohort.cohort}`] = cohort.studentCount / instructors.filter((instructor) => {
      return instructor.module === cohort.module
    }).length
    return studentsPer
  }, {})
}

console.log(studentsPerInstructor())

/*
Level 3

Code:
  Write a function called "modulesPerTeacher" that returns an object where each key is an instructor name and each value is an array of the modules they can teach based on their skills.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(modulesPerTeacher())
    should print -->
      {
        Pam: [2, 4],
        Brittany: [2, 4],
        Nathaniel: [2, 4],
        Robbie: [4],
        Leta: [2, 4],
        Travis: [1, 2, 3, 4],
        Louisa: [1, 2, 3, 4],
        Christie: [1, 2, 3, 4],
        Will: [1, 2, 3, 4]
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Reduce over the instructors to create a new object with the instructor name as the key
  2. Create a new array to store eligible cohorts for the instructor, iterating over each subject
  3. Iterate over each cohort, checking if the curriculum contains the subject and the cohort is not already in the array
  4. Add cohort to the array
  5. Map over the array to convert it into just the mod numbers
  6. Return
*/

const modulesPerTeacher = () => {
  return instructors.reduce((modulesPer, instructor) => {
    const eligibleCohorts = instructor.teaches.reduce((eligibleCohorts, subject) => {
      cohorts.forEach((cohort) => {
        if (cohort.curriculum.includes(subject) && !eligibleCohorts.includes(cohort)) {
          eligibleCohorts.push(cohort)
        }
      })
      return eligibleCohorts
    }, [])
    modulesPer[instructor.name] = eligibleCohorts.map((cohort) => {
      return cohort.module
    }).sort()
    return modulesPer
  }, {})
}

console.log(modulesPerTeacher())

/*
Level 4

Code:
  Write a function called "curriculumPerTeacher" that returns an object where each key is a curriculum topic and each value is an array of instructors who teach that topic.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(curriculumPerTeacher())
    should print -->
      {
        html: ["Travis", "Louisa"],
        css: ["Travis", "Louisa"],
        javascript: ["Travis", "Louisa", "Christie", "Will"],
        recursion: ["Pam", "Leta"],
        scope: ["Pam", "Nathaniel", "Will"],
        oop: ["Brittany", "Nathaniel", "Will"],
        react: ["Christie", "Will"],
        redux: ["Will"],
        pwas: ["Brittany", "Robbie", "Leta", "Louisa"],
        mobile: ["Nathaniel"],
        node: ["Pam", "Robbie", "Leta", "Louisa", "Christie"]
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Use reduce to create a new array by iterating over the cohorts
  2. Iterate over each topic to add it to the array if it is not already there
  3. Reduce over this unique topics array to create a new object that will be our return value
  4. Filter through the instructors to find only the ones who teach the topic
  5. Map over the filtered instructors to get them by name
  6. Set this as the property for the key of the topic
*/

const curriculumPerTeacher = () => {
  const topics = cohorts.reduce((topics, cohort) => {
    cohort.curriculum.forEach((topic) => {
      if (!topics.includes(topic)) {
        topics.push(topic)
      }
    })
    return topics
  }, [])
  return topics.reduce((curriculumPerTeacher, topic) => {
    const topicTeachers = instructors.filter((instructor) => {
      return instructor.teaches.includes(topic)
    })
    curriculumPerTeacher[topic] = topicTeachers.map((instructor) => {
      return instructor.name
    })
    return curriculumPerTeacher
  }, {})
}

console.log(curriculumPerTeacher())

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the Turing Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Turing tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.

  Had to add an interpolated string as the key in level 2
  Also had to add a sort() call to the cohort numbers in level 3
*/

module.exports = {
  studentsForEachInstructor,
  studentsPerInstructor,
  modulesPerTeacher,
  curriculumPerTeacher
}
