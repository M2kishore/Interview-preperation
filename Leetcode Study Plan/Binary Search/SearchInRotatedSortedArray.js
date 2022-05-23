//https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // Finding out the pivot value
    for(var i=0;i<nums.length;i++){
        if(nums[i]<nums[i-1]) break;
    }
    let start = 0;
    let change = i;
    let end = nums.length-1;
    
    //Run Binary search from beginning of the arrray to the pivot 
	//(Since all elements are in ascending order)
    
    while(start<=change){
        let mid1 = start+parseInt((change-start)/2);
        if(nums[mid1] === target) return mid1;
        if(nums[mid1]>target) change = mid1-1;
        else start = mid1+1; 
    }
    
    change = i; //Since the pivot element is modifed in previous binary search we reassign the value of pivot
    
    //Run Binary search from pivot to end of the array
	//(Since all elements are in ascending order)
    
    while(change<=end){
        let mid2 = change+parseInt((end-change)/2);
        if(nums[mid2] === target) return mid2;
        if(nums[mid2]>target) end = mid2-1;
        else change = mid2+1;
    }
    
    return -1
};
