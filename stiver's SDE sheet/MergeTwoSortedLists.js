//https://leetcode.com/problems/merge-two-sorted-lists/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode();
    let head = newList;
    while(l1 && l2){
        if(l1.val < l2.val){
            newList.next = l1
            l1 = l1.next;
        }else{
            newList.next = l2
            l2 = l2.next;
        }
        newList = newList.next;
    }
    newList.next = l1 || l2;
    return head.next;
};
