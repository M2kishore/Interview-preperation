//https://leetcode.com/problems/house-robber/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    let dp = new Array(len).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i<len;i++){
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]);//check if the current house and the two before is large or the one before is large
    }
    return dp[len-1];
};