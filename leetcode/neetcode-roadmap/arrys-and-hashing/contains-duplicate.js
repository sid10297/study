/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true;
    else map[nums[i]] = 1;
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicateSet(nums) {
  const set = new Set(nums);
  return set.size() !== nums.length;
}
