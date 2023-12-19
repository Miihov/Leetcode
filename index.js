/**
 * https://leetcode.com/problems/image-smoother/
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const [m, n, result] = [img.length, img[0].length, []];

  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      const neightbors = [
        img[i - 1]?.[j - 1],
        img[i - 1]?.[j],
        img[i - 1]?.[j + 1],
        img[i]?.[j - 1],
        img[i]?.[j],
        img[i]?.[j + 1],
        img[i + 1]?.[j - 1],
        img[i + 1]?.[j],
        img[i + 1]?.[j + 1],
      ].filter((val) => val !== undefined);
      const average = Math.floor(
        neightbors.reduce((acc, curr) => acc + curr, 0) / neightbors.length
      );
      result[i][j] = average;
    }
  }
  return result;
};
