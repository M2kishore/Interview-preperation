//https://leetcode.com/problems/combination-sum/submissions/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const len = candidates.length;
    candidates.sort((a, b) => a - b);
    const res = [];
    function backtrack(arr, currIdx, target) {
        if (target === 0) res.push([...arr]);

        if (target <= 0) return;

        let prev = -1;
        for (let i = currIdx; i < len; i++) {
            const candidate = candidates[i];
            if(i > currIdx && candidates[i] === candidates[i-1]) continue;
            arr.push(candidate);
            backtrack(arr, i + 1, target - candidate);
            arr.pop();
        }
    }


    backtrack([], 0, target);
    return res;
};
