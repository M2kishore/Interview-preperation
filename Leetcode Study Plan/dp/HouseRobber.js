//https://leetcode.com/problems/house-robber/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    if(len== 0){
        return 0;
    }
    if(len === 1){
        return nums[0];
    }
    if(len === 2){
        return Math.max(nums[0],nums[1]);
    }
    let left_pointer= 0;
    let right_pointer = 0;
    for(let i=0;i<len;i++){
        let current_rob = nums[i];
        
        let temp = Math.max(left_pointer,right_pointer+current_rob);
        right_pointer = left_pointer;
        left_pointer = temp;
    }
    return left_pointer;
};
