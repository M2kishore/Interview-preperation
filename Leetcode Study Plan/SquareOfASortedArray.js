//https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let stack = [];
    if(right === 0){
        return [nums[0]**2]
    }
    while(stack.length !== nums.length){
        let lsquare = nums[left]**2;
        let rsquare = nums[right]**2;
        if(lsquare > rsquare){
            stack.unshift(lsquare);
            left++;
        }else{
            stack.unshift(rsquare);
            right--;
        }
    }
    return stack;
};