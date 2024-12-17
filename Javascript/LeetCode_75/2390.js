var removeStars = function(s) {
    let result = [];

    for (const char of s) {
        if (char === "*") {
            result.pop();
        } else {
            result.push(char);
        }
    }

    return result.join("");
};