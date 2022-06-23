//https://leetcode.com/problems/longest-common-prefix/submissions/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    for(let i=0;i<strs[0].length;i++){
        if(strs.every((str) => {
            return str[i] === strs[0][i];
        })){
            result += strs[0].charAt(i);
        }else{
            break;
        }
    }
    return result;
};
