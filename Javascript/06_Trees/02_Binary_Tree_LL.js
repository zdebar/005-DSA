class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    toString(level = 0) {
        // Create the string representation of the node with indentation based on its level
        let ret = "  ".repeat(level) + this.data + "\n";
        for (const child of this.children) {
            ret += child.toString(level + 1); // Recursively add child nodes
        }
        return ret;
    }

    addChild(node) {
        // Adds a child node to the current node's children
        this.children.push(node);
    }
}

// Create the root node and its child nodes
const tree = new TreeNode('Drinks');
const cold = new TreeNode('Cold');
const hot = new TreeNode('Hot');
tree.addChild(cold);
tree.addChild(hot);

// Create the leaf nodes and add them to their respective parents
const tea = new TreeNode('Tea');
const coffee = new TreeNode('Coffee');
const cola = new TreeNode('Cola');
const fanta = new TreeNode('Fanta');

cold.addChild(cola);
cold.addChild(fanta);
hot.addChild(tea);
hot.addChild(coffee);

// Print the tree structure
console.log(tree.toString());
