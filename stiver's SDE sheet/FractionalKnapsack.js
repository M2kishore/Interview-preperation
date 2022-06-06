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

class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let W = input_ar0[1];
        let arr = [];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<2*n;i+=2)
            arr.push(new Item(input_ar1[i], input_ar1[i+1]));
        let obj = new Solution();
        let num = obj.fractionalKnapsack(W, arr, n);
        console.log(parseFloat(num).toFixed(2));
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} W
 * @param {Item[]} arr
 * @param {number} n
 * @returns {number}
*/

/*
class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}
*/
//https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1
class Solution 
{
    //Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n)
    {
        // code here
        arr = arr.sort((a,b)=>(b.value/b.weight) - (a.value/a.weight));
        let knapsack = 0;
        let totalValue = 0;
        for(let i=0;i<n;i++){
            let checkSack = knapsack + arr[i].weight;
            if(checkSack <= W){
                knapsack = checkSack;
                totalValue += arr[i].value;
            }else{
                let remainingWeight = W - knapsack;
                totalValue = totalValue + ((arr[i].value/arr[i].weight)*remainingWeight);
                break;
            }
        }
        return totalValue;
    }
}
