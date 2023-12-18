/**
 * https://leetcode.com/problems/powx-n/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const calculatePow = (base, exp) => {
    if (exp === 0) return 1;
    if (exp % 2 === 0) {
      const halfPow = calculatePow(base, exp / 2);
      return halfPow * halfPow;
    } else {
      return base * calculatePow(base, exp - 1);
    }
  };

  if (n === 0) return 1;

  if (n > 0) {
    return calculatePow(x, n).toFixed(5);
  } else {
    const reverseX = 1 / x;
    return calculatePow(reverseX, Math.abs(n)).toFixed(5);
  }
};
