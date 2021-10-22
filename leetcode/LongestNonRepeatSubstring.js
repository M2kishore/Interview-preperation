//https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let tortoise = 0;
    let rabbit = 0;
    let max = 0;
    while(rabbit < s.length){
        if(!set.has(s.charAt(rabbit))){
            set.add(s.charAt(rabbit))
            rabbit++;
            max = Math.max(set.size,max);
        }else{
            set.delete(s.charAt(tortoise))
            tortoise++;
        }
    }
    return max;
};