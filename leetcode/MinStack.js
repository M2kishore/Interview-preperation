//https://leetcode.com/problems/min-stack/submissions/
var MinStack = function() {
        this.stack=[];
        this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(val<this.min){
        this.min = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.min === this.stack.pop()){
        this.min = this.resetMin()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};
//extrafunction to compute the last min value
MinStack.prototype.resetMin = function() {
    return Math.min(...this.stack);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */