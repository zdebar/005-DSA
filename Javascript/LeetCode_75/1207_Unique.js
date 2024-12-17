var uniqueOccurrences = function(arr) {
    let counter = {};
    let seen = new Set();

    for (const num of arr) {
        counter[num] = (counter[num] || 0) + 1;
    }

    for (const count of Object.values(counter)) {
        if (seen.has(count)) {
            return false;
        }
        seen.add(count);
    }

    return true;
};