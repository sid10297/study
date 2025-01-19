/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  return [...s.toLowerCase()].sort().join("") ===
    [...t.toLowerCase()].sort().join("")
    ? true
    : false;
};
