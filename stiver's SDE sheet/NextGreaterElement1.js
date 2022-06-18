//https://leetcode.com/problems/next-greater-element-i/submissions/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nums2Length = nums2.length;
    let nums1Length = nums1.length;
    let stack = [];
    let nextGreatestElement = new Array(nums2Length).fill(-1);
    for(let i=nums2Length-1;i>=0;i--){
        console.log(nextGreatestElement,stack)
        if(stack.length === 0){
            stack.push(nums2[i]);
        }else{
            if(nums2[i] < stack[stack.length-1]){
                nextGreatestElement[i] = stack[stack.length-1];
                stack.push(nums2[i]);
            }else{
                while(stack[stack.length-1] <= nums2[i]){
                    stack.pop();
                }
                nextGreatestElement[i] = stack[stack.length-1] === undefined? -1: stack[stack.length-1];
                stack.push(nums2[i]);
            }
        }
    }
    for(let i=0;i<nums1Length;i++){
        let index = nums2.indexOf(nums1[i]);
        nums1[i] = nextGreatestElement[index];
    }
    return nums1;
};
