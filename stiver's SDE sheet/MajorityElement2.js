//https://leetcode.com/problems/majority-element-ii/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n1 = 0;
    let n2 = 0;
    let c1 = 0;
    let c2 = 0;
    for(num of nums){
        if(n1 === num)
            c1++;
        else if(n2 === num)
            c2++;
        else if(c1 === 0){
            n1 = num;
            c1 = 1;
        }
        else if(c2 === 0){
            n2 = num;
            c2 = 1;
        }
        else{
            c1--;
            c2--;
        }
    }
    c1 = 0;
    c2 = 0;
    for(num of nums){
        if(num === n1)
            c1++
        else if(num === n2)
            c2++
    }
    let res = [];
    let thresh = Math.floor(nums.length/3);
    if(c1 > thresh)
        res.push(n1)
    if(c2 > thresh)
        res.push(n2)
    return res;
};
