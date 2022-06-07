//https://leetcode.com/problems/subsets-ii/submissions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
    let result = [];
    
    function generate(currentArr,accumulator){
        result.push([...accumulator]);
        for(let i=0;i<currentArr.length;i++){
            if(i===0 || currentArr[i] !== currentArr[i-1]){
                accumulator.push(currentArr[i]);
                console.log(currentArr.slice(i+1));
                generate(currentArr.slice(i+1),accumulator);
                accumulator.pop();
            }
        }
    }
    generate(nums,[]);
    return result;
    
};
