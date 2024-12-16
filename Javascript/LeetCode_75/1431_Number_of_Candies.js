var kidsWithCandies = function(candies, extraCandies) {
    let max = null;
    for (const num of candies) {
        if (num > max) {
            max = num;
        }
    }

    let result = [];
    for (const num of candies) {
        result.push((num + extraCandies) >= max)
    }

    return result;
};