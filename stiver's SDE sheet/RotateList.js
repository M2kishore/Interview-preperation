//https://leetcode.com/problems/rotate-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!k) return head;
    if (!head) return null;
    let length = 0;
    let currentNode = head;
    let tail = head;
    //find Length
    while (currentNode)
    {
        length++;
        tail = currentNode;
        currentNode = currentNode.next
    }
    //create circular linked list
    tail.next = head;
    k = k % length;
    currentNode = tail;
    let newTail = length-k
    //find tail
    while (newTail){
        currentNode = currentNode.next;
        newTail--;
    }
    //cut tail and return head
    const newHead = currentNode.next;
    currentNode.next = null;
    return newHead;    
};
