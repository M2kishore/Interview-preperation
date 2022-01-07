https://leetcode.com/problems/search-insert-position/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let left = 0,
        right = nums.length - 1;
    
      while (right >= left) {
        const mid = Math.floor((left+right)/2);
        if(nums[mid] > target) {
           right = mid - 1; 
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else return mid;
    }
    return left;
};