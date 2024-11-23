class TreeNode {
  constructor(data) {
      this.data = data;
      this.children = [];
  }

  toString(level = 0) {
      let ret = "  ".repeat(level) + this.data + "\n";
      for (const child of this.children) {
          ret += child.toString(level + 1);
      }
      return ret;
  }

  addChild(node) {
      this.children.push(node);
  }
}

// Create the tree
const tree = new TreeNode('Drinks');
const cold = new TreeNode('Cold');
const hot = new TreeNode('Hot');
tree.addChild(cold);
tree.addChild(hot);

const tea = new TreeNode('Tea');
const coffee = new TreeNode('Coffee');
const cola = new TreeNode('Cola');
const fanta = new TreeNode('Fanta');

cold.addChild(cola);
cold.addChild(fanta);
hot.addChild(tea);
hot.addChild(coffee);

// Print the tree
console.log(tree.toString());
