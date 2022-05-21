//https://leetcode.com/problems/majority-element/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let halfFloor = Math.floor(nums.length/2)
    for(let i of nums){
        if(i in map){
            map[i]+=1;
            if(map[i] > halfFloor)
                return i;
        }else{
           map[i] = 1; 
        }
    }
    return 1;
};
