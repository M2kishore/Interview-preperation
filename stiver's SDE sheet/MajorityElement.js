//https://leetcode.com/problems/majority-element/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let element = 0;
    for(let i of nums){
        if(count === 0){
            element = i;
        }
        if(i === element){
            count++;
        }else{
            count--;
        }
    }
    return element;
};
