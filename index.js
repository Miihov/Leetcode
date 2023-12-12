/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let temp = "";
  if (x > 0 && x.toString().length > 1) {
    for (let i = 0; i < x.toString().length; i++) {
      temp = x.toString()[i] + temp;
    }
    if (x == parseInt(temp)) return true;
    else return false;
  }
  if (x.toString().length == 1) {
    return true;
  }
  return false;
};
