var isSubsequence = function(s, t) {
    let i = 0;
    let n = s.length;
    if (n === 0) return true;

    for (const char of t) {
        if (char === s[i]) {
            i++;
            if (i === n) return true;
        }
    }
    return false;
};