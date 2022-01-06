//https://leetcode.com/problems/car-pooling/submissions/
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let carPooling = [];
    for(let [passengers, from, to] of trips){
        carPooling.push([from, passengers]);
        carPooling.push([to,-passengers]);
    }
    //sort
    carPooling = carPooling.sort((a,b)=> a[0]-b[0] || a[1]-b[1]);
    //check
    let currentCapacity = 0;
    for(let [to , passengersAt] of carPooling){
        currentCapacity += passengersAt;
        if(currentCapacity > capacity){
            return false;
        }
    }
    return true;
    
};