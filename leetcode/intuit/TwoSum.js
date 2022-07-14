//https://leetcode.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let holder = {};
    for(let i=0;i<nums.length;i++){
        let val = target - nums[i];
        if(val in holder){
            return [holder[val],i];
        }else{
            holder[nums[i]] = i;
        }
    }
    return
};
