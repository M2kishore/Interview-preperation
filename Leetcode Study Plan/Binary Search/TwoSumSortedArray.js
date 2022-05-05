//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    let stop = false;
    while(!stop){
        if(numbers[left]+numbers[right] > target){
            right--;
        }else if(numbers[left]+numbers[right] < target){
            left++;
        }else{
            stop = true;
        }
    }
    return [left+1,right+1];
};
