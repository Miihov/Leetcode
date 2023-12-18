/**
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  sortedNums = quicksort(nums);
  console.log(sortedNums);

  return (
    sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2] -
    sortedNums[0] * sortedNums[1]
  );
};

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];

  const left = array.filter((element) => element < pivot);
  const middle = array.filter((element) => element === pivot);
  const right = array.filter((element) => element > pivot);

  return [...quicksort(left), ...middle, ...quicksort(right)];
}

console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));
