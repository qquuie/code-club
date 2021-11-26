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
 var mergeTwoLists = function(l1, l2) {
    let t=null
    if(l1 === null || l2 === null){
        return l1 || l2
    }
    else{
        if(l1.val > l2.val){
            t=l2
            l2=l2.next
            t.next=mergeTwoLists(l1,l2)
        }
        else{
            t=l1
            l1=l1.next
            t.next=mergeTwoLists(l1,l2)
        }
    }
    return t
};
mergeTwoLists(l1,l2)