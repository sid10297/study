/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0; // Edge case

  const mySet = new Set(nums); // O(n) space
  let max = 0;

  for (const num of mySet) {
    // Only start counting if it's the beginning of a sequence
    if (!mySet.has(num - 1)) {
      let currentNum = num;
      let tempMax = 1;

      while (mySet.has(currentNum + 1)) {
        currentNum++;
        tempMax++;
      }

      max = Math.max(max, tempMax);
    }
  }

  return max;
};

console.log(longestConsecutive([9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   // brute force, does not solve leetcode problem
//   let max = 1;
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     let tempMax = 1;
//     let currentNum = nums[i];
//     while (nums.includes(currentNum + 1)) {
//       tempMax++;
//       currentNum++;
//     }
//     max = Math.max(max, tempMax);
//   }

//   return max;
// };
