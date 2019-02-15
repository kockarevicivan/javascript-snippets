class Node {
    constructor(key) {
        this.key = key;
    }
}

export default class Tree {
    constructor() {
        this.root = new Node(0);
    }

    addNode(node, parent = this.root) {
        if(!parent)
            parent = node;
        else if(node.key < parent.key)
            this.addNode(node, parent.left);
        else if(node.key >= parent.key)
            this.addNode(node, parent.right);
    }
}

const tree = new Tree();
tree.addNode(new Node(4));
// tree.addNode(new Node(1));
// tree.addNode(new Node(3));
// tree.addNode(new Node(3));
// tree.addNode(new Node(2));
// tree.addNode(new Node(5));
console.log(tree);