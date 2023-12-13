/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let charCounter = 0;
  for (var i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      console.log(`Checking ${haystack[i + charCounter]} == ${needle[j]}`);
      if (haystack[i + charCounter] == needle[j]) {
        charCounter++;
        if (charCounter == needle.length) {
          return i;
        }
      } else {
        charCounter = 0;
        break;
      }
    }
  }
  return -1;
};
