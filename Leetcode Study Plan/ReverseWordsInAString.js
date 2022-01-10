//https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let split = s.split(" ");
    for(let i=0;i<split.length;i++){
        split[i] = split[i].split("").reverse().join("");
    }
    return split.join(" ");
}