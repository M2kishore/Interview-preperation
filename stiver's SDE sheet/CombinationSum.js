//https://leetcode.com/problems/combination-sum/submissions/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a,b)=>a-b);
    let result = [];
    function generate(index,localArr,candidates,target){
        if(target === 0){
            result.push([...localArr]);
            return;
        }        
        if(target<0){
           return
        }
        for(let i=index;i<candidates.length;i++){
            let val = candidates[i];
            localArr.push(val);
            generate(i,localArr,candidates,target-val)
            localArr.pop(val);
        }
    }
    generate(0,[],candidates,target);
    return result;
};
