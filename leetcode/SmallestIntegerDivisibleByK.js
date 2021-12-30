//https://leetcode.com/problems/smallest-integer-divisible-by-k/
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let count = 1;
    let n = 0;
    while (count <= k) {
        n = n * 10 + 1; // 1, 11, 111, 1111, 11111 ..
        console.log(n,"bef");
        n = n % k;                   // because for example 27%3 === 3%3 + 18%3
        console.log(n,"aft")
        if (n === 0) return count;
        count++;
    }
    return -1;    
};