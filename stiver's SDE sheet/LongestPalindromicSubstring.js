//https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s === null || s.length < 1)
        return "";
    let start = 0;
    let end = 0;
    for(let i=0;i<s.length;i++){
        let len1 = expandFromMiddle(s,i,i)//case for handling odd substring check
        let len2 = expandFromMiddle(s,i,i+1);
        let len = Math.max(len1, len2);
        if(len > end - start){
            start = Math.round(i - ((len-1)/2)); //taking left half from i
            end = i+(len/2); // taking right half from i
        }
    }
    console.log(end,start)
    return s.substring(start,end+1);
    
        
};
function expandFromMiddle(string, L, R){
    let left = L;
    let right = R;
       if(string === null || left>right) 
           return "";
        while(left >= 0 && right <string.length && string.charAt(left) === string.charAt(right)){
            left--;
            right++;
        }
        return right-left-1;
}
