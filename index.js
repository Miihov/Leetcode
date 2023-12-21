/**
 * https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let xAxis = new Array();
  for (let i = 0; i < points.length; i++) {
    xAxis[i] = points[i][0];
  }
  xAxis.sort((a, b) => {
    return a - b;
  });
  let gap = 0;
  for (let i = 0; i < xAxis.length; i++) {
    if (Math.abs(xAxis[i] - xAxis[i + 1]) > gap) {
      gap = Math.abs(xAxis[i] - xAxis[i + 1]);
    }
  }
  return gap;
};
