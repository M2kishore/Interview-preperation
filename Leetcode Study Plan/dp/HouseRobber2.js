//https://leetcode.com/problems/house-robber-ii/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    //no houses
    if(len === 0){
        return 0;
    }
    //one house
    if(len === 1){
        return nums[0];
    }
    //2 house
    if(len === 2){
        return Math.max(nums[0],nums[1]);
    }
    //without house 1
    let secondLast = nums[1];
    let last = Math.max(nums[1],nums[2]);
    let result1 = last;
    for(let i=3;i<nums.length;i++){
        result1 = Math.max(secondLast+nums[i], last);
        secondLast = last;
        last = result1;
    }
    //without last house
    secondLast = nums[0];
    last = Math.max(nums[0],nums[1]);
    let result2 = last;
    for(let i=2;i<nums.length-1;i++){
        result2 = Math.max(secondLast+nums[i],last);
        secondLast = last;
        last = result2;
    }
    return Math.max(result1,result2);
    
};
