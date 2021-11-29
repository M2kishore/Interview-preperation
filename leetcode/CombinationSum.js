//https://leetcode.com/problems/combination-sum/submissions/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) { 
    let result = [];
    candidates = candidates.sort((a,b)=>a-b);//sort it to begin from the smallest combination helpful ni break statement
    const backtracking = (currentCandidates,currentTarget,index)=>{
        if(currentTarget<0) return;
        if(currentTarget === 0){
            result.push([...currentCandidates]);
        }
        for(let i = index;i<candidates.length;i++){
            let val = candidates[i];
            if(val > currentTarget) break;
            currentCandidates.push(val);
            backtracking(currentCandidates,currentTarget-val,i);
            currentCandidates.pop();//backtrack and try the next value
        }
    }
    backtracking([],target,0);
    return result;
};