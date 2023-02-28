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

// function countByTwo() {
//   for (let i = 0; i <= 10; i += 2) {
//     console.log(i)
//   }
// }

// countByTwo()

//2) Write a program to extract out values from an array given an array of indicies:

//IE: 
// removeByIndicies(['a', 'b', 'c'], [0, 2]) => ['a', 'c']
// const arr = ['a', 'b', 'c'];
// const indexArr = [0, 2];
// const arrays = []
// const newArray = arrays.at(arr, indexArr)
// console.log(newArray)

// function removeByIndexArray(arr, specifiedIndex) {
//   const removed = []

//   for(idx of specifiedIndex) {
//     if(arr[idx]) {
//       removed.push(arr[idx])
//     }
//   }

//   for(idx in arr) {
//     if(specifiedIndex.includes(Number(idx))) {
//       removed.push(arr[idx])
//     }
//   }

//   specifiedIndex.forEach(item => {
//     if(arr[item]) removed.push(arr[item])
//   });
//   return specifiedIndex.map(item => {
//     return arr[item]
//   })
// }
// console.log(removeByIndexArray(['a', 'b', 'c'], [0, 2]))

// 3) Write a program that invokes a function a given amount of times. It should return an array where each element is the return value of said function.

// IE:
// times(myFunction, 5) => [myFunction output, myFunction output, myFunction output, myFunction output, myFunction output]
// const students = ["mitchell", "jake", "karely", "john"]

// students.forEach((student) => console.log(student))
// const students = ["mitchell", "jake", "karely", "john"]
// const num = 5

// function thisSucks(student) {
//   console.log(student)
// }

// thisSucks(students)

// function multipleBy(num) {

// }

function times(func, iterations) {
  const newArray = []
  for (let i = 0; i < iterations; i++) {
    newArray.push(func())
  }
  return newArray
}

console.log(times(() => "howdy", 5))
// 4) FizzBuzz
// Log a range from 1-n, where 'n' is a max value.
// Values that are divisible by 3 should log as "Fizz",
// Values that are divisible by 5 should log as "Buzz"
// Values that are both divisible by 3 and 5 should log as "FizzBuzz".
// let maxValue = 50;
// function fizzBuzz(value){
//   for (let i = 1; i < value + 1; i++) {
//     console.log(i)
//     }
//   }

// console.log(fizzBuzz(maxValue))

// switch (fizzBuzz(maxValue)) {
//   case i % 5 === 0:
//      return "Buzz"
//   case i % 3 === 0:
//      return "Fizz"
//   case i % 5 == 0 && i % 3 === 0:
//      return "Fizzbuzz"
//   default: return i
// }


// const maxValue = 50;

// function fizzBuzz(value) {
//   for (let i = 1; i < value + 1; i++) {
//     switch (true) {
//       case (i % 5 === 0 && i % 3 === 0):
//          console.log("Fizzbuzz")
//          break
//       case (i % 5 === 0):
//          console.log("Buzz")
//          break
//       case (i % 3 === 0):
//          console.log("Fizz")
//          break
//       default: console.log(i)
//       break
//     }
//   }
// }

// fizzBuzz(maxValue)

// const maxValue = 50;

// function fizzBuzz(value) {
//   for (let i = 1; i < value + 1; i++) {
//     if (i % 5 === 0 && i % 3 === 0){
//       console.log("Fizzbuzz")
//     }else if (i % 3 === 0){
//       console.log("fizz")
//     }else if (i % 5 === 0 ) {
//       console.log("Buzz")
//     } else {
//       console.log(i)
//     }
//     }
//   }
// fizzBuzz(maxValue)
