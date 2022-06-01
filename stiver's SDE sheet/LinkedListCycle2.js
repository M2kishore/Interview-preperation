//https://leetcode.com/problems/linked-list-cycle-ii/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    //find if cycle is present or not
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next;
        if(slow === fast){
            break;
        }
    }
    //finding the correct position of the cycle starting
    if(fast === null || fast.next === null){
        return null;
    }
    slow = head;
    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
