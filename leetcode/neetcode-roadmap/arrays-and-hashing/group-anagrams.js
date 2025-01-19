/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [[strs[0]]];
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const elem = strs[i].split("").sort().join("");
    if (map[elem]) {
      map[elem].push(strs[i]);
    } else {
      map[elem] = [strs[i]];
    }
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
