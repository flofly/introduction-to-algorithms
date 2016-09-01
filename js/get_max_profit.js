stock_prices_yesterday = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stock_prices_yesterday));
// returns 6 (buying for $5 and selling for $11)

function getMaxProfit(stocks) {

    var minPrice = stocks[0];
    var bestProfit = stocks[1] - stocks[0];

    for (var i = 0; i < stocks.length; i++) {

        bestProfit = Math.max(bestProfit, stocks[i] - minPrice);

        // the min price is updated as we move because we don't care about the past
        // and it will give us more for the future
        minPrice = Math.min(stocks[i], minPrice);

    }

    return bestProfit;
}

