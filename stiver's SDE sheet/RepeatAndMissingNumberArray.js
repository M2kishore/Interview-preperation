//https://www.interviewbit.com/problems/repeat-and-missing-number-array/
module.exports = { 
 //param A : array of integers
 //return a array of integers
	repeatedNumber : function(A){
        let arr = new Array(A.length+1).fill(0);
        result = [];
        for(let i=0;i<A.length;i++){
            arr[A[i]] = arr[A[i]] + 1;
        }
        for(let i=1;i<arr.length;i++){
            if(arr[i] === 2){
                result.push(i);
            }
        }
        for(let i=1;i<arr.length;i++){
            if(arr[i] === 0){
                result.push(i);
            }
        }
        return result;
	}
}
