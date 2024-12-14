var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;

    while (j >= 0 && i >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[i + j + 1] = nums1[i];
            i--;
        } else {
            nums1[i + j + 1] = nums2[j];
            j--;
        }
    }

    if (j >= 0) {
        nums1.splice(0, j + 1, ...nums2.slice(0, j + 1));  
    }
      
    return nums1
};