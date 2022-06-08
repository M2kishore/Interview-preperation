//https://leetcode.com/problems/palindrome-partitioning/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []

    function dfs(start = 0, curr = []) {
        if (start === s.length && isPalindrome(curr)) {
            res.push([...curr])
            return
        }

        for (let i = start; i < s.length; i++) {
            let substr = s.slice(start, i + 1)
            curr.push(substr)
            dfs(i + 1, curr)
            curr.pop()
        }
    }

    dfs()
    return res
};

function isPalindrome(strs) {
    for (let str of strs) {
        let left = 0
        let right = str.length - 1
        while (left <= right) {
            if (str[left] !== str[right]) {
                return false
            }
            left++
            right--
        }
    }
    return true
}
