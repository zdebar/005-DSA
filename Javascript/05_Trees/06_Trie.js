class TrieNode {
    constructor() {
        this.children = {}; // Maps characters to nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Root of the Trie
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false; // Word not found
            }
            node = node.children[char];
        }
        return node.isEndOfWord; // Return true if it's the end of a word
    }

    // Check if there's any word starting with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false; // No word starts with this prefix
            }
            node = node.children[char];
        }
        return true;
    }
}
