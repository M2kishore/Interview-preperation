//https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
/**
 * @param {number[]} firstInput
 * @param {number[]} secondInput
 * @return {number}
 */
var maxDistance = function (firstInput, secondInput) {
    let maximumDistance = 0;
    let size = Math.min(firstInput.length, secondInput.length);
    for (let i = 0; i < size; i++) {
        maximumDistance = Math.max(maximumDistance, binarySearchForCurrentMaximumDistace(i, firstInput[i], secondInput));
    }
    return maximumDistance;
};

/**
 * @param {number} pivotIndex
 * @param {number} pivotValue
 * @param {number[]} secondInput
 * @return {number}
 */
function binarySearchForCurrentMaximumDistace(pivotIndex, pivotValue, secondInput) {
    let left = pivotIndex;
    let right = secondInput.length - 1;
    let currentMaximumDistace = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (pivotIndex <= mid && pivotValue <= secondInput[mid]) {
            currentMaximumDistace = mid - pivotIndex;
        }

        if (pivotValue <= secondInput[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return currentMaximumDistace;
}
