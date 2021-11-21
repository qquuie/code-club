/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. check l1===[],l2===[] or not
 * 2. if l1 or l2 ===null list.next = either l1 or l2
 * 3. check l1.val<l2.val 
 * 4. return list.next because list.head don't have value
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let list = new ListNode(0);
    let current = list;
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1 === null && l2 === null) {
        return null
    }
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1 !== null) {
        current.next = l1;
    } else if (l2 !== null) {
        current.next = l2;
    }
    return list.next
};