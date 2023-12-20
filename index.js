/**
 * https://leetcode.com/problems/buy-two-chocolates/
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => {
    return a - b;
  });
  console.log(prices);
  if (prices[0] + prices[1] <= money)
    return Math.abs(prices[0] + prices[1] - money);
  if (prices[0] + prices[1] > money) return money;
};
