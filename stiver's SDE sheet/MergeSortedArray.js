//https://leetcode.com/problems/merge-sorted-array/submissions/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let back = n+m-1;
    n--;
    m--;
    while(n>=0){
        if(m>=0 && nums1[m]>nums2[n]){
            nums1[back] = nums1[m]
            m--;
        }else{
            nums1[back] = nums2[n];
            n--;
        }
        back--;
    }
};
