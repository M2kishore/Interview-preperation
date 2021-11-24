//https://leetcode.com/problems/valid-parentheses/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */
//Better than this algorithm is using switch case which is verymuch less time and memory consimung
const BRACKET_MATCH = {
    "{": "}",
    "[": "]",
    "(": ")",
}
var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(BRACKET_MATCH[s[i]]){ // search for the bracket in the match object
           stack.push(BRACKET_MATCH[s[i]]); // push the bracket if available
        }else{
            if(s[i] !== stack.pop()) return false; // check the stack and the next element if they are same
        }
    }
    return stack.length === 0;
    
};