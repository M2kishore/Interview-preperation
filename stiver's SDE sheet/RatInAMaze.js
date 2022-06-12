//User function Template for javascript

/**
 * @param {number[][]} m
 * @param {number} n
 * @return {string[]}
 */
//https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
class Solution {
    findPath(m,n){
        //code here
        let result = [];
        let generate = (i,j,ans,direction)=>{
            if(i === n || j === n || i < 0 || j < 0 || m[i][j] === 0){
                return;
            }
            if(i === n-1 && j === n-1){
                ans+=direction;
                result.push(ans);
                return;
            }
            
            ans += direction;
            m[i][j] = 0;
            generate(i+1,j,ans,'D',m);
            generate(i,j-1,ans,'L',m);
            generate(i,j+1,ans,'R',m);
            generate(i-1,j,ans,'U',m);
            m[i][j] = 1;
            return;
        }
        generate(0,0,"","",m);
        return result;
    }
}
