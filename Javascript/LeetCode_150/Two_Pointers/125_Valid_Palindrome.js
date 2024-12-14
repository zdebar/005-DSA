var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++;
        } else if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
};

var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    const isAlphanumeric = (char) => {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || 
            (code >= 65 && code <= 90) ||  
            (code >= 97 && code <= 122)   
        );
    };

    while (i < j) {
        if (!isAlphanumeric(s[i])) {
            i++;
        } else if (!isAlphanumeric(s[j])) {
            j--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
};
