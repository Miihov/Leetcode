/**
 * https://leetcode.com/problems/candy/
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let counter = new Array();
  for (let i = 0; i < ratings.length; i++) {
    counter[i] = 1;
  }
  console.log(counter);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) counter[i] = counter[i - 1] + 1;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      counter[i] = Math.max(counter[i], counter[i + 1] + 1);
  }

  return counter.reduce((a, b) => a + b, 0);
};
