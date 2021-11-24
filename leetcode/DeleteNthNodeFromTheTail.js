//https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode()
    start.next = head
    
    let fast = start
    let slow = start
    
    for (let i = 0; i <= n; i += 1) {
        fast = fast.next
    }
    
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }
        
    slow.next = slow.next.next
    
    return start.next
};