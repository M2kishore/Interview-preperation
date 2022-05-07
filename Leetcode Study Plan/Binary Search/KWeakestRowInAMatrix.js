//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/submissions/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let map = [];
    let result = [];
    for(let i=0;i<mat.length;i++){
        let count = get1Count(mat[i]);
        map.push([i,count]);
    }
    map = map.sort((a,b)=>a[1]-b[1]);
    for(let i=0;i<k;i++){
        result.push(map[i][0]);
    }
    return result;
    function get1Count(arr){
        let left = 0;
        let right = arr.length-1;
        if(arr[0]===0){
            return 0;
        }
        if(arr[arr.length-1]===1){
            return arr.length;
        }
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(arr[mid] === 1 && arr[mid+1] === 0){
                return mid+1;
            }else if(arr[mid] === 1){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return 0;
    }
};
