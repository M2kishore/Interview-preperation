//https://leetcode.com/problems/find-the-duplicate-number/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[nums[0]];
    let fast = nums[nums[nums[0]]];
    while(slow!=fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    fast = nums[0];
    while(fast!=slow){
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
};
