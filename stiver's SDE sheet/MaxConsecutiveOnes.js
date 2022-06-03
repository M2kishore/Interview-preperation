//https://leetcode.com/problems/max-consecutive-ones/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max1s = 0;
    let slow = 0;
    let fast = 0;
    while(slow < nums.length){
        if(nums[slow] === 1){
            fast = slow;
            let count = 0;
            while(nums[fast] === 1){
                count++;
                fast++;
            }
            if(count > max1s){
                max1s = count;
            }
            slow = fast;
        }
        slow++;
    }
    return max1s;
};
