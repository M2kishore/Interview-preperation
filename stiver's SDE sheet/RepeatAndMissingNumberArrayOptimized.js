//https://www.interviewbit.com/problems/repeat-and-missing-number-array/
module.exports = { 
 //param A : array of integers
 //return a array of integers
	repeatedNumber : function(A){
        let n = A.length;
        let neededSum = (n*(n+1))/2;
        let neededSumSquare = (n*(n+1)*(2*n+1))/6;
        let sum = 0;
        let sumSquare = 0;
        for(let i=0;i<n;i++){
            sum += A[i];
            sumSquare += A[i] * A[i];
        }
        let XminusY = neededSum-sum;
        let XplusY =  (neededSumSquare-sumSquare)/XminusY;
        let x = (XminusY + XplusY)/2;
        let y = XplusY - x;
        return [y,x];
	}
}
