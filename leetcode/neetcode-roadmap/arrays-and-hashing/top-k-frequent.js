/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]] += 1;
    else map[nums[i]] = 1;
  }

  const sortedArrayWithFreq = Object.entries(map).toSorted(
    ([, fre1], [, fre2]) => fre2 - fre1
  );

  return sortedArrayWithFreq.slice(0, k).map(([num]) => parseInt(num));
};

// var topKFrequentBucketSort = function (nums, k) {
//   const counterArray = Array(nums.length);
//   const frequency = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (frequency[nums[i]]) frequency[nums[i]] += 1;
//     else frequency[nums[i]] = 1;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const counterIndex = frequency[nums[i]];
//     if (counterArray[counterIndex]) {
//       if (!counterArray[counterIndex].includes(nums[i])) {
//         counterArray[counterIndex].push(nums[i]);
//       }
//     } else {
//       counterArray[counterIndex] = [nums[i]];
//     }
//   }

//   let index = counterArray.length - 1;
//   const output = [];

//   while (output.length < k) {
//     if (counterArray[index]) {
//       output.push(...counterArray[index]);
//     }
//     index -= 1;
//   }
//   return output;
// };

// console.log(topKFrequentBucketSort([4, 1, -1, 2, -1, 2, 3], 2));
