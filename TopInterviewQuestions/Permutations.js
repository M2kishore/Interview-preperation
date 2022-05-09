//https://leetcode.com/problems/permutations/submissions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let permute =(result,currentList)=>{
        if(currentList.length === nums.length){
            result.push([...currentList]);
        }
        for(let i=0;i<nums.length;i++){
            if(currentList.includes(nums[i])){
                continue;
            }
            currentList.push(nums[i]);
            permute(result,currentList);
            currentList.pop();
        }
    }
    permute(result,[]);
    return result;
};
