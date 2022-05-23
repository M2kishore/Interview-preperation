//https://leetcode.com/problems/longest-consecutive-sequence/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxCount = 0;
    let hashset = new Map();
    for(let i=0;i<nums.length;i++){
        hashset.set(nums[i],0);
    }
    for(let i=0;i<nums.length;i++){
        if(hashset.has(nums[i]-1)){
            continue;
        }else{
            let count = 1;
            let pointer = nums[i]+1;
            while(hashset.has(pointer)){
                pointer++;
                count++;
            }
            if(count > maxCount){
                maxCount = count;
            }
        }
    }
    return maxCount;
};
