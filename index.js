/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  } else {
    let flag = true;
    let sArray = s.split("").sort();
    let tArray = t.split("").sort();
    for (let i = 0; i < s.length; i++) {
      if (sArray[i] === tArray[i]) flag = true;
      else {
        flag = false;
        break;
      }
    }
    return flag;
  }
};
