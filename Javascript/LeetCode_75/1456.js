var maxVowels = function(s, k) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let max = 0;
    let sum = 0;

    // Sum first k item of array
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) sum++;
    }

    // Sliding window
    max = sum;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) sum++;
        if (vowels.has(s[i - k])) sum--;
        if (sum > max) max = sum;
        if (max === k) return k;
    }

    return max;
};