//https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let i = 0;
    //skipping 0's
    while(nums[i] === 0){
        i++;
    }
    //we will check till length of array
    let largestNumber = nums[nums.length-1];
    let target = 1;
    while(target <= nums.length){
        let currentRange = nums.length-i;
        if(target === currentRange){
            return target;
        }else if(target < currentRange){
            if(target === nums[i]){//repeated values
                while(nums[i] === nums[i+1]){
                    i++;
                }
            i++;
            }
            target++;
        }else{
            target++;
        }
    }
    return -1;
};
