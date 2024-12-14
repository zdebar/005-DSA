var areAnagrams = function (s, t) {
    if (s.length !== t.length) return false;

    const counter = {};

    // Use one loop to count characters for both strings
    for (let i = 0; i < s.length; i++) {
        counter[s[i]] = (counter[s[i]] || 0) + 1; // Increment count for s
        counter[t[i]] = (counter[t[i]] || 0) - 1; // Decrement count for t
    }

    // Check if all counts are zero
    for (const key in counter) {
        if (counter[key] !== 0) {
            return false;
        }
    }

    return true;
};

var areAnagrams = function (s, t) {
    if (s.length !== t.length) return false;

    const counter = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++;
        counter[t.charCodeAt(i) - 97]--;
    }

    return counter.every(count => count === 0);
};
