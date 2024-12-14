var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    strs.sort()
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i)
};

var longestCommonPrefix2 = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    return prefix;
};

var longestCommonPrefix3 = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++)
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                if (j === 0) return "";
                prefix = prefix.slice(0,j);
                break;
            }
        }
    return prefix;
};