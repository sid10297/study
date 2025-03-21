/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (map[diff]) return [map[diff], i + 1];
    else map[numbers[i]] = i + 1;
  }
};
