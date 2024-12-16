var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (flowerbed[i - 1] ?? 0) === 0 &&
            (flowerbed[i + 1] ?? 0) === 0
        ) {
            count++;
            if (count >= n) return true;
            flowerbed[i] = 1;
        }        
    }
  
    return count >= n;
};