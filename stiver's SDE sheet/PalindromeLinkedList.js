//https://leetcode.com/problems/palindrome-linked-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //find mid
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let current = slow;
    let previous = null;
    while(current){
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    let left = head;
    let right = previous;
    while(right){
        if(left.val !== right.val){
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
}
