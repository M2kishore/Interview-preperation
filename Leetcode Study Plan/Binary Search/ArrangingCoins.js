//https://leetcode.com/problems/arranging-coins/submissions/
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sumNatural = (n)=>{
        return (n*(n+1)/2);
    }
    let ans = 0;
    let left = 1;
    let right = n;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(sumNatural(mid) <= n){
            ans = mid;
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return ans;
};
