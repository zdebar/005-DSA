var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result1 = [];
    let result2 = [];

    for (const num of set1) {
        if (!set2.has(num)) result1.push(num);
    }

    for (const num of set2) {
        if (!set1.has(num)) result2.push(num);
    }

    return [result1, result2];
};

var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result1 = [...set1].filter(num => !set2.has(num));
    const result2 = [...set2].filter(num => !set1.has(num));

    return [result1, result2];
};
