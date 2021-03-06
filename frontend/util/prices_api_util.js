export const fetchPrices = (ticker, timeframe) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${timeframe}?chartIEXOnly=true&token=${window.iexAPIKey}`
    })
}

export const fetchNews = ticker => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/5?token=${window.iexAPIKey}`
    })
}

export const fetchQuotes = tickers => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickers.join(",")}&types=quote&token=${window.iexAPIKey}`
    })
}

export const fetchBatchNews = tickers => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickers.join(",")}&types=news&last=2&token=${window.iexAPIKey}`
    })
}

export const fetchBatchDayPrices = (tickers, timeframe) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickers.join(",")}&types=chart&range=${timeframe}&chartIEXOnly=true&token=${window.iexAPIKey}`
    })
}