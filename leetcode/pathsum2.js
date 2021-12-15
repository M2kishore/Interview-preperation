//https://leetcode.com/problems/path-sum-ii/submissions/
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum, path=[]) {
    if (!root) return [];
    if (!root.right && !root.left)
        return targetSum === root.val? [path.concat(root.val)] : [];
    targetSum -= root.val;
    path = [...path,root.val];
    return [
        ...pathSum(root.left, targetSum, path),
        ...pathSum(root.right, targetSum, path)
    ];
};