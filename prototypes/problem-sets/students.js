const { students } = require('../datasets/students');

// To run the code you've written in this file, use node prototypes/problem-sets/students.js

console.log('Running students.js')

/* Students Prompts*/

/*
Level 1

Code: 
  Write a function called "findEnrolledStudents" that returns the name of all students who are enrolled.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findEnrolledStudents())
    should print -->      
      ["John", "Bob", "Eve"]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Filter students based on whether they are enrolled
  2. Map out the student objects to a new array of student names
*/

const findEnrolledStudents = () => {
  const enrolledStudents = students.filter((student) => {
    return student.enrolled
  })
  return enrolledStudents.map((student) => {
    return student.name
  })
}

console.log(findEnrolledStudents())

/*
Level 2

Code:
  Write a function called "getAverageGrade" that takes in a student's name and returns that student's average grade.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageGrade("John"))
    should print -->  86.25

e.g.
  console.log(getAverageGrade("Bob"))
    should print -->  84.5

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Find student object by name
  2. Find the totalGrade by summing the grades array
  3. Find and return the average by dividing totalGrade by length of grades array
*/

const getAverageGrade = (studentName) => {
  const student = students.find((student) => {
    return student.name === studentName
  })
  const totalGrade = student.grades.reduce((totalGrade, grade) => {
    totalGrade += grade
    return totalGrade
  }, 0)
  return totalGrade / student.grades.length
}

console.log(getAverageGrade("John"))
console.log(getAverageGrade("Bob"))

/*
Level 3

Code:
  Write a function called "findBestAverageGrade" that returns the name of the student with the highest average grade.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findBestAverageGrade())
    should print -->  "Eve"

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

  1. Create an array of student names using map on the student objects
  2. Create a new array of average grades in the same indices as their student name counterparts
  3. Find the max of the average grades
  4. Find the index of the max
  5. Find the student name at the same index
*/

const findBestAverageGrade = () => {
  const studentNames = students.map((student) => {
    return student.name
  })
  const averageGrades = studentNames.map((name) => {
    return getAverageGrade(name)
  })
  return studentNames.at(averageGrades.indexOf(averageGrades.max))
}

console.log(findBestAverageGrade())

/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the students prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all students tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.
*/


module.exports = {
  findEnrolledStudents,
  getAverageGrade,
  findBestAverageGrade
}
