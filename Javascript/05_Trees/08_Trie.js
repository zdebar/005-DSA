class TrieNode {
  constructor() {
      this.children = {};
      this.endOfString = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insertString(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
          const ch = word[i];
          let node = current.children[ch];
          if (node === undefined) {
              node = new TrieNode();
              current.children[ch] = node;
          }
          current = node;
      }
      current.endOfString = true;
      console.log("Successfully inserted");
  }

  searchString(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
          let node = currentNode.children[word[i]];
          if (node === undefined) {
              return false;
          }
          currentNode = node;
      }

      return currentNode.endOfString === true;
  }
}

function deleteString(root, word, index) {
  const ch = word[index];
  const currentNode = root.children[ch];
  let canThisNodeBeDeleted = false;

  if (Object.keys(currentNode.children).length > 1) {
      deleteString(currentNode, word, index + 1);
      return false;
  }

  if (index === word.length - 1) {
      if (Object.keys(currentNode.children).length >= 1) {
          currentNode.endOfString = false;
          return false;
      } else {
          delete root.children[ch];
          return true;
      }
  }

  if (currentNode.endOfString === true) {
      deleteString(currentNode, word, index + 1);
      return false;
  }

  canThisNodeBeDeleted = deleteString(currentNode, word, index + 1);
  if (canThisNodeBeDeleted === true) {
      delete root.children[ch];
      return true;
  } else {
      return false;
  }
}

// Example usage:
let newTrie = new Trie();
newTrie.insertString("App");
newTrie.insertString("Appl");
deleteString(newTrie.root, "App", 0);
console.log(newTrie.searchString("App"));  // Output will be false, since "App" was deleted
