var romanToInt = function(s) {
    const RomanToIntegerTable = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    }
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = RomanToIntegerTable[s[i]];
        const next = RomanToIntegerTable[s[i + 1]] || 0;

        sum += cur >= next ? cur : -cur;
    }

    return sum;
};