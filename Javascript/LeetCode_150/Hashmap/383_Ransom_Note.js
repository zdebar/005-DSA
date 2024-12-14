var canConstruct = function(ransomNote, magazine) {
    const counter = {};

    for (const char of magazine) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!counter[char] || counter[char] <= 0) {
            return false; 
        }
        counter[char]--;
    }

    return true;
};

var canConstruct = function(ransomNote, magazine) {
    const counter = new Map();

    for (const char of magazine) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!counter.get(char)) {
            return false; 
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;
};