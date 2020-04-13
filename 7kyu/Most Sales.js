/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824
You work in the best consumer electronics corporation, and your boss wants to find out which three products 
generate the most revenue. Given 3 lists of the same length like these:
products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).
Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/


function top3(products, amounts, prices) {
    const rev = products.map(function (val, i, arr) {
        return { revenue: prices[i] * amounts[i], name: arr[i], index: i }
    });
    const sorted = rev.sort(function (a, b) {
        // if b.revenue - a.revenue is 0 -> falsy then we sort by the index ascending
        return b.revenue - a.revenue || a.index - b.index
    });
    return sorted.slice(0, 3).map(function (item) {
        return item.name;
    });
}


function top3(products, amounts, prices) {
    const rev = products.map(function (val, i) {
        return prices[i] * amounts[i]
    });
    const top3 = [];
    for (let i = 0; i < 3; i++) {
        // we take the largest value from the array, get the index and push the name from the rev array
        // from exactly that index to the top3 array
        top3.push(products[rev.indexOf(Math.max(...rev))]);
        // then we set the element to - 1 because we have already added it, to prevent taking it again
        // in case two values are equal
        rev[rev.indexOf(Math.max(...rev))] = -1;
    };
    return top3;
}