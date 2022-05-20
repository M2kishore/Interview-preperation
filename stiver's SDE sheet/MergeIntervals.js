//https://leetcode.com/problems/merge-intervals/submissions/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=>a[0]-b[0]);
    let result = [];
    for(let i=0;i<intervals.length;i++){
        let min = intervals[i][0];
        let max = intervals[i][1];
        let j = 0;
        for(j=i+1;j<intervals.length;j++){
            if(intervals[j][0] > max){
                break;
            }else if(intervals[j][1] > max){
                max = intervals[j][1];
            }
        }
        result.push([min,max]);
        i = j-1;
    }
    return result;
};
