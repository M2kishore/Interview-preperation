//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current=0;
    for(let i=1;i<nums.length;i++){
        if(nums[current] !== nums[i]){
            nums[++current] = nums[i];
        }
    }
    console.log(currnet);
    return ++current;
};