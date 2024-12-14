var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;

    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - min);
        }
    }

    return maxProfit;
};