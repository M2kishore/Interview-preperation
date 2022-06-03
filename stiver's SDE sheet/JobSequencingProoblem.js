// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = [];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<3*n;i+=3){
            arr.push(new Job(input_ar1[i], input_ar1[i+1], input_ar1[i+2]));
        }
        let obj = new Solution();
        let ans = obj.JobScheduling(arr, n);
        let s = '';
        s += ans[0] + " " + ans[1];
        console.log(s);
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
*/

/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}
*/
//https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#

class Solution 
{
    //Function to find the maximum profit and the number of jobs done.
    JobScheduling(arr, n)
    {
        // code here
        arr = arr.sort((a,b)=>b.profit-a.profit);
        let maxDeadline = -1;
        for(let i=0;i<n;i++){
            if(arr[i].dead > maxDeadline){
                maxDeadline = arr[i].dead;
            }
        }
        let jobs = 0;
        let profit = 0;
        let resultArr = new Array(maxDeadline+1).fill(-1);
        for(let i=0;i<n;i++){
            for(let j=arr[i].dead;j>0;j--){
                if(resultArr[j] === -1){
                    resultArr[j] = arr[i].id;
                    jobs += 1;
                    profit += arr[i].profit;
                    break;
                }
            }
        }
        //console.log(maxDeadline)
        return [jobs,profit];
    }
}
