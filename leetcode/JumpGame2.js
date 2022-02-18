//https://leetcode.com/problems/jump-game-ii/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        newMax = Math.max(newMax, i+nums[i]);
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};
