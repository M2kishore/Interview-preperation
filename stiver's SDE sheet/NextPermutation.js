//https://leetcode.com/problems/next-permutation/submissions/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    let index = -1;
    let secondIndex = -1;
    for(index=len-2;index>=0;index--){
        if(nums[index] < nums[index+1])
            break;
    }
    if(index === -1){
        nums.reverse();
    }else{
        for(secondIndex = len-1;secondIndex>index;secondIndex--){
            if(nums[secondIndex] > nums[index]){
                break;
            }
        }
        [nums[index],nums[secondIndex]] = [nums[secondIndex],nums[index]];
        let low=index+1;
        let high=len-1;
        while(low<high){
           [ nums[low],nums[high]]=[ nums[high],nums[low]];
            low++;
            high--
        }
    }
};
