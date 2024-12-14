var removeElement = function(nums, val) {
    // moves k to end, pop
    let k = nums.length;
    let i = 0;

    while (i < k) {
        if (nums[i] === val) {
            [nums[i], nums[k-1]] = [nums[k-1], nums[i]];
            k--;
        } else {
            i++;
        }
    }
    return k;
};

var removeElement = function(nums, val) {
    // two pointer
    let k = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];  
            k++;  
        }
    }
    
    return k;  
};