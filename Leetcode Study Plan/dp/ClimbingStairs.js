//https://leetcode.com/problems/climbing-stairs/submissions/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n,memo=new Array) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
};
