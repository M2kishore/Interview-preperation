//https://leetcode.com/problems/unique-paths/submissions/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let N = m+n-2;
    let r = Math.min(n-1,m-1);
    let res = 1;
    for(let i=1;i<=r;i++){
        res = res*((N-r+i)/i);
    }
    return res;
}
