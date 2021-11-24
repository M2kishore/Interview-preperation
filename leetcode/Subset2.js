//https://leetcode.com/problems/subsets-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    //sort the array to find duplicates
    nums.sort((a,b) => a-b)
    let result = [];
    
    function generate(currentArr,accumulator){
        result.push([...accumulator]);
        for(let i=0;i<currentArr.length;i++){
            if(i==0 || currentArr[i] !== currentArr[i-1]){
                console.log("acc before",accumulator)
                accumulator.push(currentArr[i]);
                generate(currentArr.slice(i+1),accumulator)
                console.log("accu after generator",accumulator)
                accumulator.pop();
                console.log("after accumulator pop",accumulator)
            }
        }
    }
    generate(nums,[]);
    return result;
    
};