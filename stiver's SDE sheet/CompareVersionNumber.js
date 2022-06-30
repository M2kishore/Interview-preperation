//https://leetcode.com/problems/compare-version-numbers/submissions/
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split('.').map(strNumber=>parseInt(strNumber));
    version2 = version2.split('.').map(strNumber=>parseInt(strNumber));
    while(version1.length < version2.length){
        version1.push(0);
    }
    while(version2.length < version1.length){
        version2.push(0);
    }
    for(let i=0;i<version1.length;i++){
        if(version1[i] < version2[i]){
            return -1;
        }else if(version1[i] > version2[i]){
            return 1;
        }
    }
    return 0;
};
