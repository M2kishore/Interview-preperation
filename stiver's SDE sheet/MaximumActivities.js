//User function Template for javascript
//https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
/*
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
