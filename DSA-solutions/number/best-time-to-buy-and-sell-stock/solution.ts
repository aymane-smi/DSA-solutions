function maxProfit(prices: number[]): number {
    let r = 1;
    let l = 0;
    let maxP = 0;
    while(r < prices.length){
        let profit = prices[r] - prices[l];
        if(profit > 0)
            maxP = Math.max(maxP, profit);
        else
            l = r;
        r++;
    }

    return maxP;
};