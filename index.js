/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let bucket = new Object();
  nums.forEach((x) => {
    if (bucket.hasOwnProperty(x)) {
      bucket[x] = bucket[x] + 1;
    } else bucket[x] = 1;
  });

  let majorityElement;
  let count;
  for (element in bucket) {
    if (!majorityElement) {
      majorityElement = element;
      count = bucket[element];
    } else {
      if (bucket[element] > count) {
        majorityElement = element;
        count = bucket[element];
      }
    }
  }
  if (count > nums.length / 2) return majorityElement;
};
