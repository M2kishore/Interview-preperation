// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let inputAr = readLine().split(" ").map((x)=>parseInt(x));
    
    let n = inputAr[0];
    let m = inputAr[1];
    let k = inputAr[2];
    let A = new Array(n);
    let B = new Array(m);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for(let i = 0;i<n;i++)
      A[i] = input_ar1[i];
    let input_ar2 = readLine().split(" ").map((x) => parseInt(x));
    for(let i = 0;i<m;i++)
      B[i] = input_ar2[i];
  
    let obj = new Solution();
    let res = obj.kthElement(A,B,n,m,k);
    
    console.log(res);

  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */
//https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1
class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        if(n > m){
            return this.kthElement(B,A,m,n,k);
        }
        let low = Math.max(0,k-m);
        let high = Math.min(k,n);
        while(low <= high){
            let cut1 = Math.floor((low+high)/2);
            let cut2 = k-cut1;
            let l1 = cut1 === 0 ? -Infinity : A[cut1-1];
            let l2 = cut2 === 0 ? -Infinity : B[cut2-1];
            let r1 = cut1 === n ? Infinity : A[cut1];
            let r2 = cut2 === m ? Infinity : B[cut2];
            
            if(l1 <= r2 && l2 <= r1){
                return Math.max(l1,l2);
            }else if(l1 > r2){
                high = cut1-1;
            }else{
                low = cut1+1;
            }
        }
        return 1;
    }
}
