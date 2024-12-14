var removeDuplicates = function(nums) {
    let n = nums.length;
    if (n <= 1) return n;

    let i = 1;
    let j = 1;

    while (j < n) {
        if (nums[i - 1] !== nums[j]) {
            nums[i] = nums[j];
            i++;
        }
        j++;        
    }
    return i; 
};