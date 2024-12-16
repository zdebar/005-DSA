var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = minHeight * (right - left);
        max = Math.max(max, currentArea);

        // Move the pointer with the smaller height to first index with higher height
        if (height[left] < height[right]) {
            while (left < right && height[left] <= minHeight) {
                left++;
            }
        } else {
            while (left < right && height[right] <= minHeight) {
                right--;
            }
        }
    }

    return max;
};