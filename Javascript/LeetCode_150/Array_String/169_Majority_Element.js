var majorityElement = function(nums) {
    const nHalf = nums.length / 2;
    const counter = {};

    for (const int of nums) {
        counter[int] = (counter[int] || 0) + 1;
        if (counter[int] > nHalf) return int;
    }

    return null;
};

var majorityElement = function(nums) {
    // Boyer-Moore Voting Algorithm

    let candidate = null;
    let count = 0;

    // Phase 1: Find a candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // No need for validation as problem guarantees a majority element
    return candidate;
};