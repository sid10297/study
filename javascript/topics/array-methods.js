const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of the array elements
const sum = numbers.reduce((prev, curr, i, arr) => {
  // prev (accumulator): Holds the running total, initialized to 0
  // curr (current element): The current element being processed in the array
  // i (index): The index of the current element in the iteration (optional)
  // arr (array): The original array being processed (optional)

  // Add the current element (curr) to the accumulator (prev)
  return prev + curr;
}, 0); // Initial value of prev is set to 0

console.log(sum); // Output: 15
