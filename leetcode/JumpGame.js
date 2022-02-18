//https://leetcode.com/problems/jump-game/submissions/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let index = 0;
    let max = 0;
    while(index < nums.length){
        max = Math.max(max,index+nums[index]);
        if(max >= nums.length-1){
            return true;
        }
        if(max <= index && nums[index] === 0){
            return false;
        }
        index++;
    }
    return false;
};
