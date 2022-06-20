//https://leetcode.com/problems/string-to-integer-atoi/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    
    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;
    
    let result = '';
    let sign = 1;
    let idx = 0;
    
    if (s[idx] === '-' || s[idx] === '+') {
        if (s[idx] === '-') sign = -1;
        
        idx++;
    }
    
    while (idx < s.length) {
        const char = s[idx];
        
        if (!('0' <= char && char <= '9')) {
            break;
        }
        
        result += char;
        idx++;
    }

    const lastResult = sign * Number(result);
    return lastResult < MIN ? MIN : lastResult > MAX ? MAX : lastResult;
};
