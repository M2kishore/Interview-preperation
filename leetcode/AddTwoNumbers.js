//https://leetcode.com/problems/add-two-numbers/submissions/
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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = null, root = null;
    while(l1  || l2){
     let sum = 0;
        //get the sum of the 2 nodes
     if(l1){
         sum += l1.val;
          l1 = l1.next;
     }
     if(l2){
         sum += l2.val;
         l2 = l2.next;
     }
     sum += carry;
    
        //split sum and carry to add the sum to node and carry to the next node.
     val = sum % 10;
     carry  = Math.floor(sum / 10);
     if(head){
        head.next = new ListNode(val);
        head = head.next;
         }
     else{
         head = new ListNode(val);
         root = head;
         }
    
    }
    //if carry is present append it to the last node
    if(carry){
        head.next = new ListNode(carry);
        head = head.next;
    }
    return root;
};