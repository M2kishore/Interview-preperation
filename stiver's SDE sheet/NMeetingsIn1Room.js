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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let start = new Array(n);
        let end = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            start[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            end[i] = input_ar2[i];
        let obj = new Solution();
        console.log(obj.maxMeetings(start, end, n));
    }
}// } Driver Code Ends


//User function Template for javascript
//https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
 * @param {number[]} start
 * @param {number[]} end
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    maxMeetings(start, end, n)
    {
        // code here
        let arr = [];
        for(let i=0;i<n;i++){
            //[start,end,index]
            arr.push([start[i],end[i],i]);
        }
        //sorting the array with respect to end time
        arr = arr.sort((meeting1,meeting2)=>meeting1[1]-meeting2[1]);
        //count the possible meetings
        let count = 0;
        let res = [];
        let maxEnd = -1;
        for(let i=0;i<n;i++){
            if(arr[i][0] > maxEnd){
                count++;
                res.push(arr[i]);
                maxEnd = arr[i][1];
            }
        }
        //console.log(res)
        return count;
    }
}
