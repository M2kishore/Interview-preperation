//https://leetcode.com/problems/reverse-pairs/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */

function reversePairs(nums) {
    return mergeSort(nums,0,nums.length-1);
};

function merge(nums,left,mid,right){
    let i = left;
    let j = mid;
    let k = 0;
    let temp = new Array(right - left + 1).fill(0);
    let pairCount = 0;
    
    // HERE WE ARE COUNTING THE REVERSED PAIRS 
    while(i < mid && j <= right) {
        if(nums[i] > 2*nums[j]) {
            pairCount += (mid - i);     
            j++;
        } else {
            i++;
        }
    }
    // ALL THE CODE BELOW IS JUST TO SORT THE ARRAY JUST LIKE WE DO IN MERGE SORT
    i = left;
    j = mid;
    k = 0;
    while(i < mid && j <= right) {
        if(nums[i] > nums[j]) {
            temp[k] = nums[j];
            j++;
            k++;
        } else {
            temp[k] = nums[i];
            i++;
            k++;
        }
    }
    while(i < mid) {
        temp[k] = nums[i];
        i++;
        k++;
    }
    while(j <= right) {
        temp[k] = nums[j];
        j++;
        k++;
    }
    k = 0;
    while(left <= right ) {
        nums[left] = temp[k];
        k++;
        left++;
    }
    return pairCount;
}

function mergeSort(nums,left,right){
    let pairCount = 0;
    if(left < right) {
        let mid = Math.floor((right + left)/2)
        pairCount = mergeSort(nums,left,mid);
        pairCount += mergeSort(nums,mid+1,right);
        pairCount += merge(nums,left,mid+1,right);
    }
    return pairCount;
}
