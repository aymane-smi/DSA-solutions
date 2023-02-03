class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int r = 1;
        int l = 0;
        int maxP = 0;
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