var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2] || nums[i] != nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k
};

var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]){
            if (k !== i) nums[k] = nums[i];
            k++;
        }
    }

    return k;
};