var lengthOfLastWord = function(s) {
    let n = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            n++;
        } else if (n > 0) {
            return n;
        }

    }
    return n;
};

var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};