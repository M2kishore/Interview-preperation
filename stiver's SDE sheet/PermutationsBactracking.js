//https://leetcode.com/problems/permutations/submissions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums,permutation=[],result=[]) {
    if(0 === nums.length){
        result.push([...permutation]);
    }
    for(let i=0;i<nums.length;i++){
        permutation.push(nums[i]);
        let afterRemoval = nums.filter((nums,index)=>index != i);
        permute(afterRemoval,permutation,result);
        permutation.pop();
    }
    return result;
};
