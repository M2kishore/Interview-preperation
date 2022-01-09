//https://leetcode.com/problems/rotate-array/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    let tempArr = nums.splice(nums.length-k,k);
    return nums.unshift(...tempArr);
};