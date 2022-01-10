//https://leetcode.com/problems/move-zeroes/solution/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonzero = 0;
    for(let current = 0;current<nums.length;current++){
        if(nums[current] !== 0){
            nums[nonzero] = nums[current];
            nonzero++;
        }
    }
    console.log(nums);
    for(let i=nonzero;i<nums.length;i++){
        nums[i] = 0;
    }
};