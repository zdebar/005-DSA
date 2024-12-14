var isHappy = function(n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);
        n = n.toString().split("").reduce((sum, digit) => sum + digit**2, 0);
    }

    return true;
};

