//https://leetcode.com/problems/valid-parentheses/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */
const brackets = {
    '[':']',
    '(':')',
    '{':'}',
}
var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        let matchBracket = brackets[s[i]];
        if(matchBracket !== undefined){
            stack.push(matchBracket);
        }else{
            if(stack.pop() !== s[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
};
