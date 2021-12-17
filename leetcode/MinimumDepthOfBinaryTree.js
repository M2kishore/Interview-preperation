//https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.right && !root.left) return 1;
    let depth = 1;
    let queue = [root];
    while(queue.length){
        let qLen = queue.length;
        for(let i=0;i<qLen;i++){
            let node = queue.shift();
            if(!node.left && !node.right) return depth;
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
        }
        depth++;
    }
    return depth;
};