/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums3 = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
  const initialLength = nums3.length;
  if (initialLength == 1) return nums3[0];
  if (initialLength % 2 == 0) {
    let actionsCount = initialLength / 2 - 1;
    for (let i = 0; i < initialLength; i++) {
      if (i < actionsCount) {
        nums3.shift();
        nums3.pop();
      } else {
        return (parseFloat(nums3[0]) + parseFloat(nums3[1])) / 2;
      }
    }
  } else {
    for (let i = 0; i < initialLength; i++) {
      nums3.shift();
      nums3.pop();
      if (nums3.length == 1) {
        return nums3[0];
      }
    }
  }
};
