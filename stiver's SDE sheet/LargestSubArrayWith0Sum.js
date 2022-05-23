//https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1
//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */


class Solution {
    maxLen(arr,n){
        //code here
        let maxi = 0;
        let map = new Map();
        let sum = 0;
        for(let i=0;i<n;i++){
            sum += arr[i];
            if(sum === 0){
                maxi = i+1;
            }else{
                if(map.has(sum)){
                    maxi = Math.max(maxi,i-map.get(sum));
                }else{
                    map.set(sum,i);
                }
            }
        }
        return maxi;
    }
}
