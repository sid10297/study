// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   const output = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product *= nums[j];
//       }
//     }
//     output.push(product);
//   }
//   return output;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const l = [];
  const r = [];
  const output = [];
  let lElem = 1;
  for (let i = 0; i < nums.length; i++) {
    l.push(lElem);
    lElem *= nums[i];
  }
  let rElem = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    r.unshift(rElem);
    rElem *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    output.push(l[i] * r[i]);
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
