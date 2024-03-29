class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int r = 1, l = 0, maxP = 0;
        while(r < prices.size()){
            int profit = prices[r] - prices[l];
            if(profit > 0)
                maxP = maxP > profit ? maxP : profit;
            else
                l = r;
            r++;
        }
        return maxP;
    }
};