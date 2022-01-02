//https://leetcode.com/problems/happy-number/submissions/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let q = [n];
    let map = new Map();
    while(q.length > 0){
        let num = q.shift();
        let result = num.toString().split('').reduce((sum,number)=>{
            return sum+number**2
        },0);
        if(result === 1){
            return true;
        }
        if(map.get(result)){
            break;
        }
        map.set(result,true);
        q.push(result);
    }
    return false;
            
};