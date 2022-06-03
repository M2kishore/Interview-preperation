//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1){
        return 1;
    }
    let slow = 0;
    let fast = 1;
    while(fast < nums.length){
        if(nums[slow] === nums[fast]){
            fast++;
        }else{
            nums[++slow] = nums[fast];
        }
    }
    return slow+1;
};
