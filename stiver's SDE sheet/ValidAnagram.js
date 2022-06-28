//https://leetcode.com/problems/valid-anagram/submissions/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let map = {};
    for(i of s){
        map[i] = (map[i] || 0) + 1;
    }
    for(i of t){
        if(!map[i]) return false;
        map[i]--;
    }
    return true;
};
