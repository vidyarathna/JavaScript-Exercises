// Question: Write a function called manipulateArray that takes in an array of integers and performs the following operations:
// 1. Remove all even numbers from the array.
// 2. Double the value of each remaining number.
// 3. Return the resulting array sorted in ascending order.

function manipulateArray(arr) {
  // Remove even numbers
  let filteredArr = arr.filter(num => num % 2 !== 0);

  // Double the value of each remaining number
  let doubledArr = filteredArr.map(num => num * 2);

  // Sort the resulting array
  let sortedArr = doubledArr.sort((a, b) => a - b);

  return sortedArr;
}

let inputArray = [1, 3, 2, 4, 5, 6];
console.log(manipulateArray(inputArray)); // Output: [2, 6, 10]
