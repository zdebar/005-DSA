var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapS.get(charS) && (mapS.get(charS) !== charT)) || 
            (mapT.get(charT) && (mapT.get(charT) !== charS))) {
            return false;
        }

        mapS.set(charS, charT);
        mapT.set(charT, charS);
    }

    return true;
};