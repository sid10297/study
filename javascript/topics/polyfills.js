const numbers = [1, 2, 3];

// Adding a custom `iterate` method to the Array prototype
Array.prototype.iterate = function (cb) {
  const array = []; // Initialize an empty array to store modified elements

  // Loop through each element in the array
  for (let i = 0; i < this.length; i++) {
    // Apply the callback function to each element and its index
    // Push the result into the `array`
    array.push(cb(this[i], i));
  }

  // Return the new array with modified elements
  return array;
};

// Use the `iterate` method to process elements of the `numbers` array
const multipliedByTwo = numbers.iterate((element, index) => {
  // Multiply each element by 2 and add the current index
  return element * 2 + index;
});

// Log the resulting array
console.log("multipliedByTwo: ", multipliedByTwo); // Output: [2, 5, 8]

// * Explanation:
// The `iterate` method is a custom implementation of an operation similar to `map`.
// It creates a new array by applying the provided callback function to each element of the original array.
// In this example, the callback multiplies each element by 2 and adds its index to it.
// The result is [2, 5, 8].

// Adding a custom `extract` method to the Array prototype

Array.prototype.extract = function (cb) {
  const array = []; // Array to store filtered elements
  for (let i = 0; i < this.length; i++) {
    // Check the condition directly in the if statement
    if (cb(this[i], i)) {
      array.push(this[i]); // Add the element if the condition is true
    }
  }
  return array; // Return the new filtered array
};

// Use the `extract` method to filter elements from the `numbers` array
const numbersGreaterThanTwo = numbers.extract((num) => {
  // Include only elements greater than or equal to 2
  return num >= 2;
});

// Log the resulting array
console.log("numbersGreaterThanTwo: ", numbersGreaterThanTwo); // Output: [2, 3]

// Explanation:
// The `extract` method is a custom implementation of an operation similar to `filter`.
// It creates a new array containing only elements that pass the test implemented in the callback.
// In this example, the callback checks if each number is greater than or equal to 2.
// The result is [2, 3].

Array.prototype.myReduce = function (cb, initialValue) {
  let prev = initialValue;
  for (let i = 0; i < this.length; i++) {
    prev = cb(prev, this[i], i, this);
  }
  return prev;
};

const mySum = numbers.myReduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log("Sum from myReduce: ", mySum);

// * Explanation:
// The `myReduce` method is a custom implementation of the `reduce` method.
// It iterates over the array and applies the provided callback function to each element.
// The callback function receives four arguments:
//   - prev: The accumulated value from the previous iteration.
//     Initially, it's set to the `initialValue` if provided, or to the first element of the array otherwise.
//   - curr: The current element being processed.
//   - i: The index of the current element.
//   - this: The array itself.
// The callback function's return value becomes the `prev` value for the next iteration.
// Finally, the `myReduce` method returns the accumulated value after processing all elements.

// In this example, the `myReduce` method is used to calculate the sum of all elements in the `numbers` array.
// The callback function simply adds the `prev` value (the running sum) to the `curr` value (the current element).
// The initial value for `prev` is 0.
// The result is 6 (1 + 2 + 3).
