class Solution {
    public int maxProfit(int[] prices) {
        int r = 0, l =0, maxP = 0;
        while(r < prices.length){
            int profit = prices[r] - prices[l];
            if(profit > 0)
                maxP = Math.max(profit, maxP);
            else
                l = r;
            r++;
        }
        return maxP;
    }
}