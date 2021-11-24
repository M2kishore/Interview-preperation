https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let holder = {};
    for(let i=0;i<nums.length;i++){
        if(target - nums[i] in holder){
            return [holder[target - nums[i]],i];
        }else{
            holder[nums[i]] = i;
        }        
    }
    return [];
};