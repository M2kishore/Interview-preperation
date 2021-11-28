//https://leetcode.com/problems/generate-parentheses/submissions/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    backtracking(result,"",0,0,n);
    return result;
};
const backtracking = (result, currentString, open, close, max)=>{
        if(currentString.length === 2*max){
            result.push(currentString);
            return;
        }    
    if(open<max) backtracking(result, currentString+"(", open+1, close, max);
    if(close<open) backtracking(result, currentString+")", open, close+1, max);
}