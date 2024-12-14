var isValid = function(s) {
    const arr = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const par of s) {
        if (map[par]) {
            arr.push(par);
        } else {
            if (arr.length === 0 || map[arr.pop()] !== par) {
                return false;
            }
        }
    }

    return arr.length === 0; 
};