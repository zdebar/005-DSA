var summaryRanges = function(nums) {
    let start = nums[0];
    let end = nums[0];
    let result = [];

    for (let i = 1; i <= nums.length; i++ ) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            if (start === end) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${end}`);
            }
            start = nums[i];
            end = nums[i];
        }
        
    }

    return result;
};