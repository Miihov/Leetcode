/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} number
 * @return {number}
 */
var reverse = function (x) {
  let number = x.toString();
  if (number[number.length - 1] == 0) {
    number = number.slice(0, -1);
  }
  let result = "";
  if (number[0] == "-") {
    for (let i = 1; i < number.length; i++) {
      result = number[i] + result;
    }
    result = number[0] + result;
    if (result > -2147483648) return result;
    else return 0;
  } else {
    for (let i = 0; i < number.length; i++) {
      result = number[i] + result;
    }
  }
  if (result < 2147483647) return result;
  else return 0;
};
