//https://leetcode.com/problems/climbing-stairs/submissions/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a=0;
    let b=1;
    for(let i=0;i<n;i++){
        b = a+b;
        a = b-a;
    }
    return b;
    
};
