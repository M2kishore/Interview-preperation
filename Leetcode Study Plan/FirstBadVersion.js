//https://leetcode.com/problems/first-bad-version/submissions/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let high = n;
        while(low < high){
            let mid = Math.floor(low + (high - low)/2);
           isBadVersion(mid) ? high = mid : low = mid + 1;
        }
        return high;
    };
};