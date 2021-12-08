/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    const ans = new ListNode(0)
    let target = ans;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            target.next = l1;
            l1 = l1.next;
        }
        else {
            target.next = l2;
            l2 = l2.next;
        }
        target = target.next
    }
    if (l1 !== null) {
        target.next = l1;
    }

    if (l2 !== null) {
        target.next = l2;
    }
    return ans.next
};