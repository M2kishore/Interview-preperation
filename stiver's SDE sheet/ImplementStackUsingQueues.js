//https://leetcode.com/problems/implement-stack-using-queues/submissions/
var MyStack = function() {
    this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.unshift(x);
    for(let i=0;i<this.arr.length-1;i++){
        this.arr.unshift(this.arr.pop());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.arr.length === 0){
        return true;
    }
    return false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
