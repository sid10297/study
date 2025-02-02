const alphanumericCharacters = "abcdefghijklmnopqrstuvwxyz1234567890";

// /**
//  * @param {string} s
//  * @return {string}
//  */
// function preparePalindromeString(s) {
//   const convertStrToLowercase = [...s.toLocaleLowerCase()];
//   let str = "";
//   for (const elem of convertStrToLowercase) {
//     if (alphanumericCharacters.includes(elem)) {
//       str += elem;
//     }
//   }
//   return str;
// }

// /**
//  * @param {string} s
//  * @return {string}
//  */
// function reverse(s) {
//   return s.split("").reverse().join("");
// }

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// function isPalindrome(s) {
//   const sanitizedString = preparePalindromeString(s);
//   let reversedString = reverse(sanitizedString);
//   return sanitizedString === reversedString ? true : false;
// }

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const input = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let l = 0;
  let r = input.length - 1;

  while (l <= r) {
    if (input[l] !== input[r]) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
