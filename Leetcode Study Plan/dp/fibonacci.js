//https://leetcode.com/problems/fibonacci-number/submissions/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibArr = [0,1,1];
    
    for(let i = 3; i <=n; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    
    return fibArr[n];
};
