//https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    nums1 = nums1.sort((a,b)=>a-b);
    nums2 = nums2.sort((a,b)=>a-b);
    
    for(let i=0;i<nums2.length;i++){
        let mid = searchElement(nums1,nums2[i]);
        if(mid !== null){
            result.push(nums2[i]);
            nums1 = nums1.slice(0,mid).concat(nums1.slice(mid+1,nums1.length));
            nums2 = nums2.slice(0,i).concat(nums2.slice(i+1,nums2.length));
            i--;
            console.log(nums1,nums2)
        }
    }
    return result;
};
function searchElement(array,element){
    let left = 0;
    let right = array.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(array[mid] === element){
            return mid;
        }else if(array[mid] <= element){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return null;
}
