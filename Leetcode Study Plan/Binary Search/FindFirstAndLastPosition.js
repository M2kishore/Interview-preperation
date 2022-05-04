//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = findIndex(nums,target,true);
    let last = findIndex(nums,target,false);
    return [first,last];
};

function findIndex(nums,target,isFirst){
    let result = -1;
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            result = mid;
            if(isFirst){
                right = mid-1;
            }else{
                left = mid+1;
            }
        }else if(nums[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return result;
}
