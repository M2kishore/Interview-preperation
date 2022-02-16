//https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    let pointer1 = head;
    let pointer2 = head.next;
    while(pointer1 && pointer2){
        let temp = pointer1.val;
        pointer1.val = pointer2.val;
        pointer2.val = temp;
        
        pointer1 = pointer2.next;
        pointer2 = pointer1?(pointer1.next):(null)
    }
    return head;
};
