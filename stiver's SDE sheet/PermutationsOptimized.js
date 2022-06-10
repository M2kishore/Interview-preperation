//https://leetcode.com/problems/permutations/submissions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    function permute(index){
        if(index === nums.length){
            result.push([...nums]);
            return;
        }
        for(let i=index;i<nums.length;i++){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            permute(index+1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    permute(0);
    return result;
};
