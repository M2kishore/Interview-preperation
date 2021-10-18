//https://leetcode.com/contest/weekly-contest-263/problems/check-if-numbers-are-ascending-in-a-sentence/
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const regex = /\d+/g;
    let matches = s.match(regex)
    return matches.every((item,i)=>{
        return i===0 | parseInt(item) > parseInt(matches[i-1]);
    });
};