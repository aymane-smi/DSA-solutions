func maxProfit(prices []int) int {
    r, l, maxP := 1, 0, 0
    for r < len(prices){
        var profit = prices[r] - prices[l]
        if profit > 0{
            maxP = int( math.Max(float64(profit), float64(maxP)) );
        }else{
            l = r
        }
        r++;
    }
    return maxP
}