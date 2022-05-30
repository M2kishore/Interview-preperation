//https://leetcode.com/problems/reverse-nodes-in-k-group/
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
var reverseKGroup = function(head, k) {
    if(head === null || k==1)
        return head;
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    let nxt = dummy;
    let pre = dummy;
    let count = 0;
    while(cur.next !== null){
        cur = cur.next;
        count++;
    }
    while(count >= k){
        cur = pre.next;
        nxt = cur.next;
        for(let i=1;i<k;i++){
            cur.next = nxt.next;
            nxt.next = pre.next;
            pre.next = nxt;
            nxt = cur.next;
        }
        pre = cur;
        count-=k;
    }
    return dummy.next;
};
