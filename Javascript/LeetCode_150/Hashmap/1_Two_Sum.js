var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length - 1; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};