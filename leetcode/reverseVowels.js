const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true,
};

/**
 * @param {string} char
 * @return {boolean}
 */
function isVowel(char) {
  if (vowels[char]) return true;
  return false;
}

/**
 * @param {string} input
 * @return {string}
 */
var reverseVowels = function (input) {
  let r = input.length - 1;
  const s = [...input];
  for (let i = 0; i < s.length - 1; i++) {
    const c = s[i];
    if (isVowel(c)) {
      while (r >= i) {
        if (isVowel(s[r])) {
          let temp = s[i];
          s[i] = s[r];
          s[r] = temp;
          r--;
          break;
        }
        r--;
      }
    }
  }
  return s.join("");
};
