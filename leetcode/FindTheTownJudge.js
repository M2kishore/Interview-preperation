//https://leetcode.com/problems/find-the-town-judge/
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustMap = new Map();
    //fill map with zeros
    for(let i=1;i<=n;i++){
        trustMap.set(i,0);        
    }
    //remove dependant perople
    for(let i=0;i<trust.length;i++){
            trustMap.delete(trust[i][0]);
    }
    //if everyone is dependnt return -1
    if(trustMap.size === 0){
        return -1;
    }else{
        //count the judges dependancies if ==n
        let judge = trustMap.keys().next().value;
        let count = 1;
        for(let i=0;i<trust.length;i++){
            if(trust[i][1] === judge)
                count++;
        }
        return count === n? judge:-1;
    }
};
console.log(findJudge(2,[[1,2]]))