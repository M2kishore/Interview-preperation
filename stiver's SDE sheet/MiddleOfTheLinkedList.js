//https://leetcode.com/problems/middle-of-the-linked-list/submissions/
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
var middleNode = function(head) {
    if(!head)
        return null;
    if(!head.next)
        return head;
    
    let slow = head;
    let slowCounter = 0;
    let fast = head.next.next;
    let fastCounter = 0;
    
    while(fast){
            
    }
};
