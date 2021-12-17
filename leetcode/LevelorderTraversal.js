//https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let q = [root];
    while(q.length){
        let qLen = q.length;
        let kuttiresult = [];
        for(let i=0;i<qLen;i++){
            let node = q.shift();
            kuttiresult.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        result.push(kuttiresult);
    }
    return result;
};