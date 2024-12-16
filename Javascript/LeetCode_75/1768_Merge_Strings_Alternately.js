var mergeAlternately = function(word1, word2) {
    let result = "";
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        result += word1[i] + word2[i];
    }

    result += word1.slice(minLength) + word2.slice(minLength);

    return result;
};

var mergeAlternately = function(word1, word2) {
    let result = "";
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        result += word1[i] + word2[i];
    }

    if (word1.length > word2.length) {
        result += word1.slice(minLength);
    } else {
        result += word2.slice(minLength);
    }
    return result;
};