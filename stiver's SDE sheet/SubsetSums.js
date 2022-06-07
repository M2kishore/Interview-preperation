//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
*/
//https://practice.geeksforgeeks.org/problems/subset-sums2234/1
let res = [];
function getCombinationSums(arr,index,sum){
    if(index === arr.length){
        res.push(sum);
        return;
    }else{
        getCombinationSums(arr,index+1,sum+arr[index]);
        getCombinationSums(arr,index+1,sum);
    }
}
class Solution {
    subsetSums(arr,n){
       //code here
       res = [];
       getCombinationSums(arr,0,0);
       return res.sort((a,b)=>a-b)
    }
}
