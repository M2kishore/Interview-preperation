//https://leetcode.com/problems/binary-search/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low <= high){
        let mid = low + (high - low)
        let midElement = nums[mid];
        if(midElement === target){
            return mid;
        }
        if(midElement < target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
    
};