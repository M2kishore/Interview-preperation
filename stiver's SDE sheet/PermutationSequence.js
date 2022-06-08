//https://leetcode.com/problems/permutation-sequence/submissions/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let numbers = [];
    let fact = 1;
    for(let i=1;i<n;i++){
        fact *= i;
        numbers.push(i);
    }
    numbers.push(n);
    let ans = "";
    k = k-1;
    while(true){
        ans += numbers[parseInt(k/fact)].toString();
        numbers.splice(parseInt(k/fact),1);
        if(numbers.length === 0){
            break;
        }
        k = k % fact;
        fact = parseInt(fact / numbers.length);
    }
    return ans;
};
