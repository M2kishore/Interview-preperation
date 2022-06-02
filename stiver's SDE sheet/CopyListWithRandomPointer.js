//https://leetcode.com/problems/copy-list-with-random-pointer/submissions/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let curr = head;
    while (curr) {
        curr.next = new Node(curr.val, curr.next, null);
        curr = curr.next.next;
    }
    curr = head;
    while (curr && curr.next) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }
    curr = head;
    let first = head.next;
    while (curr.next) {
        let next = curr.next;
        curr.next = curr.next.next;
        curr = next;
    }
    return first;
};
