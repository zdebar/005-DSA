var singleNumber = function(nums) {
    let result;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}