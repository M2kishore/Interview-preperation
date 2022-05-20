//https://leetcode.com/problems/sort-colors/submissions/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let mid = 0;
    while(mid<=right){
        let numsmid = nums[mid];
        if(numsmid === 1){
            mid++;
        }else if(numsmid === 0){
            [nums[left],nums[mid]] = [nums[mid],nums[left]];
            mid++;
            left++;
        }else{
            [nums[right],nums[mid]] = [nums[mid],nums[right]];
            right--;
        }
    }
};
