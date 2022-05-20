//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minimum = prices[0];
    for(let i=0;i<prices.length;i++){
        let currentProfit = prices[i] - minimum
        if(prices[i]<minimum){
            minimum = prices[i];
        }else if(currentProfit > profit ){
            profit = currentProfit;
        }
    }
    return profit;
}; 
