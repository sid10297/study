const alphanumericCharacters = "abcdefghijklmnopqrstuvwxyz1234567890";

/**
 * @param {string} s
 * @return {string}
 */
function preparePalindromeString(s) {
  const convertStrToLowercase = [...s.toLocaleLowerCase()];
  let str = "";
  for (const elem of convertStrToLowercase) {
    if (alphanumericCharacters.includes(elem)) {
      str += elem;
    }
  }
  return str;
}

/**
 * @param {string} s
 * @return {string}
 */
function reverse(s) {
  return s.split("").reverse().join("");
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const sanitizedString = preparePalindromeString(s);
  let reversedString = reverse(sanitizedString);
  return sanitizedString === reversedString ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
