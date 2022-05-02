//https://leetcode.com/problems/find-smallest-letter-greater-than-target/submissions/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let smallest = letters[0];
    let low = 0;
    let high = letters.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(target < letters[mid]){
            smallest = letters[mid];
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return smallest;
};
