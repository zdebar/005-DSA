var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (words.length !== pattern.length) return false; // Length mismatch

    const charToWord = new Map(); // Map pattern characters to words
    const wordToChar = new Map(); // Map words to pattern characters

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if char -> word mapping exists and matches
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        // Check if word -> char mapping exists and matches
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        // Add the mappings
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
};
