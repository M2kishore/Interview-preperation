//https://leetcode.com/problems/merge-two-sorted-lists/submissions/
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
    let pointerL1 = l1;
    let pointerL2 = l2;
    let resultNode = new ListNode();
    let resultHead = resultNode;
    while(pointerL1 && pointerL2){
        if(pointerL1.val > pointerL2.val){
            resultNode.next = pointerL2
            resultNode = resultNode.next;
            pointerL2 = pointerL2.next;
        }else{
            resultNode.next = pointerL1
            resultNode = resultNode.next;
            pointerL1 = pointerL1.next;
        }
        
    }
    while(pointerL1){
        resultNode.next = pointerL1;
        resultNode = resultNode.next;
        pointerL1 = pointerL1.next;
        
    }while(pointerL2){
        resultNode.next = pointerL2;
        resultNode = resultNode.next;
        pointerL2 = pointerL2.next;
    }
    return resultHead.next;
    
};