//https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let cur = root;
    let inorder = [];
    while(cur != null){
        if(cur.left === null){
            inorder.push(cur.val);
            cur = cur.right;
        }else{
            let prev = cur.left;
            while(prev.right != null && prev.right != cur){
                prev = prev.right;
            }
            if(prev.right === null){
                prev.right = cur;
                cur = cur.left;
            }else{
                prev.right = null;
                inorder.push(cur.val);
                cur = cur.right;
            }
        }
    }
    return inorder;
};
