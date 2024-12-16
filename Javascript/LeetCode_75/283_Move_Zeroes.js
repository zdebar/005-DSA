var moveZeroes = function(nums) {
    let next = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            if (next !== i) {
                nums[next] = nums[i];
            }
            next++;
        }
    }

    for (let i = next; i < n; i++) {
        nums[i] = 0;
    }

    return nums;
};