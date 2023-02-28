/* 
Assignments for the week starting 2/27/2023

Challenges:
1) Write a program that counts (logs) to 10 by 2's.

2) Write a program to extract out values from an array given an array of indicies:

IE: 
// removeByIndicies(['a', 'b', 'c'], [0, 2]) => ['a', 'c']

3) Write a program that invokes a function a given amount of times. It should return an array where each element is the return value of said function.

IE:
// times(myFunction, 5) => [myFunction output, myFunction output, myFunction output, myFunction output, myFunction output]

4) FizzBuzz
Log a range from 1-n, where 'n' is a max value.
Values that are divisible by 3 should log as "Fizz",
Values that are divisible by 5 should log as "Buzz"
Values that are both divisible by 3 and 5 should log as "FizzBuzz".
*/

//1) Write a program that counts (logs) to 10 by 2's.
// let i = 0;

// function countByTwo() {
//   while (i <= 10) {
//     console.log(i)
//     i++
//     i++
//   }
// }

// countByTwo()

//2) Write a program to extract out values from an array given an array of indicies:

//IE: 
// removeByIndicies(['a', 'b', 'c'], [0, 2]) => ['a', 'c']
// const arr = ['a', 'b', 'c']
// function removeByIndicies(content) {
//   const newArr = content[]
//   return console.log(newArr)
// }

// removeByIndicies(arr)

// 3) Write a program that invokes a function a given amount of times. It should return an array where each element is the return value of said function.

// IE:
// times(myFunction, 5) => [myFunction output, myFunction output, myFunction output, myFunction output, myFunction output]
// const students = ["mitchell", "jake", "karely", "john"]

// students.forEach((student) => console.log(student))

// function forEach(arr, cb) {
//   for (const i in arr) {
//     cb(arr[i])
//   }
// }

// forEach(students, (student) => console.log(student))



// 4) FizzBuzz
// Log a range from 1-n, where 'n' is a max value.
// Values that are divisible by 3 should log as "Fizz",
// Values that are divisible by 5 should log as "Buzz"
// Values that are both divisible by 3 and 5 should log as "FizzBuzz".
const maxValue = 50;
function fizzBuzz(value){
  for (let i = 1; i < value + 1; i++) {
    return console.log(i)
  }
}

switch (fizzBuzz(maxValue)) {
  case i % 5 === 0:
     return "Buzz"
  case i % 3 === 0:
     return "Fizz"
  case i % 5 == 0 && i % 3 === 0:
     return "Fizzbuzz"
  default: return i
}

