//https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const out = [];
    let mul = 1;
    
    // Calculating prefix
    for (let num of nums){
        out.push(mul);
        mul *= num
    }
    
    console.log(out);
    console.log(nums)
    // Postfix
    mul = 1
    for (let i = nums.length - 1; i >= 0; i--){
        out[i] *= mul
        console.log(out,mul)
        mul *= nums[i]
    }
    return out;
};
