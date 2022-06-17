//https://www.interviewbit.com/problems/allocate-books/
module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	books : function(A, B){
		if(A.length < B){
			return -1;
		}
		function isAllocationPossible(mid){
			let student = 1;
			let pages = 0;
			for(let i=0;i<A.length;i++){
				if(mid < A[i]) return false;
				if(pages + A[i] > mid){
					pages = A[i];
					student += 1;
				}else{
					pages += A[i];
				}
			}
			if(student > B){
				return false;
			}
			return true;
		}
		let low = A[0];
		let high = 0;
		let minPossible = -1;
		//sum of array for search space
		for(let i=0;i<A.length;i++){
			high += A[i];
		}
		while(low <= high){
			let mid = Math.floor((low+high)/2);
			if(isAllocationPossible(mid)){
				minPossible = mid;
				high = mid-1;
			}else{
				low = mid+1;
			}
		}
		return minPossible;
		
	}
};
