//https://leetcode.com/problems/search-insert-position/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] > target){
            high = mid-1;
        }else if(nums[mid] < target){
            low = mid+1;
        }else{
            return mid;
        }
    }
    return low;
};
