var reverseVowels = function(s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const stringArray = s.split("");
    let left = 0;
    let right = stringArray.length - 1;

    while (left < right) {
        // Move left pointer until a vowel is found
        while (left < right && !vowels.has(stringArray[left].toLowerCase())) {
            left++;
        }
        // Move right pointer until a vowel is found
        while (left < right && !vowels.has(stringArray[right].toLowerCase())) {
            right--;
        }
        // Swap the vowels
        [stringArray[left], stringArray[right]] = [stringArray[right], stringArray[left]];
        left++;
        right--;
    }

    return stringArray.join("");
};