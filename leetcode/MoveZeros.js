//https://leetcode.com/problems/move-zeroes/submissions/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZero = 0;
    for(let current = 0; current < nums.length;current++){
        if(nums[current] != 0){
            let temp = nums[nonZero];
            nums[nonZero] = nums[current];
            nums[current] = temp;
            nonZero++;
        }
        console.log(nums);
    }
    
};