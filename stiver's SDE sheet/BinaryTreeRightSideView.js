//https://leetcode.com/problems/binary-tree-right-side-view/
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
var rightSideView = function(root,arr = [],lvl = 0) {
    if(!root) 
        return arr;
    if(arr.length === lvl){
        arr.push(root.val);
    }
    arr[lvl] = root.val; // overwrite with val since we recurse to right latest
	
    rightSideView(root.left, arr, lvl+1);
    rightSideView(root.right, arr, lvl+1);
    
    return arr;
};
