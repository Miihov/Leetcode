/**
 * https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let tempHead = new ListNode(0);
  let current = tempHead;
  let tempValue = 0;

  while (l1 || l2) {
    if (l1) {
      var x = l1.val;
    } else {
      var x = 0;
    }
    if (l2) {
      var y = l2.val;
    } else {
      var y = 0;
    }
    const sum = x + y + tempValue;

    tempValue = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (tempValue > 0) {
    current.next = new ListNode(tempValue);
  }

  return tempHead.next;
};
