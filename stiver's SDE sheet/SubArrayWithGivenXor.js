//https://www.interviewbit.com/problems/subarray-with-given-xor/
module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	solve : function(A, B){
        let xr = 0;
        let count = 0;
        let freqMap = new Map();
        for(let i=0;i<A.length;i++){
            xr ^= A[i];
            let y = xr ^ B;
            if(xr === B){
                count++;
            }
            if(freqMap.has(y)){
                count += freqMap.get(y);
            }
            if(freqMap.has(xr)){
                freqMap.set(xr,freqMap.get(xr)+1);
            }else{
                freqMap.set(xr,1);
            }
        }
        return count;
	}
};
