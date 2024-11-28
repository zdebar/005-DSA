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