//https://leetcode.com/problems/3sum/submissions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let result = [];
    for(let i=0;i<nums.length;i++){
        let low = i+1;
        let high = nums.length-1;
        let sum =0;
        while(low < high){
            sum = nums[i]+nums[low]+nums[high];
            if(sum === 0){
                result.push([nums[i],nums[low],nums[high]]);
                while(nums[low+1] === nums[low])//skipping same values
                    low++;
                while(nums[high-1] === nums[high])
                    high++;
                low++;
                high--;
            }
            else{
                if(sum<0)//more solutions can be found in the right side
                    low++;
                else if(sum>0)//solution is towards the left side
                    high--;
            }
        }
        while(nums[i+1] === nums[i])i++
    }
    return result;
    
    
};