//https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
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
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [root];
    let depth = 0;
    while(queue.length !== 0){
        depth++;
        const len = queue.length;
        for(let i=0;i<len;i++){
            console.log(queue)
            if(queue[i].left) queue.push(queue[i].left);
            console.log(queue)
            if(queue[i].right) queue.push(queue[i].right);
            console.log(queue)
        }
        queue.splice(0,len);   
    }
    return depth;  
};