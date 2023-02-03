/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let r=1;
    let l = 0;
    let maxP = 0;
    while(r < prices.length){
        let profit = prices[r] - prices[l];
        if(profit > 0)
            maxP = Math.max(profit, maxP);
        else
            l = r;
        r++; 
    }
    return maxP;
};